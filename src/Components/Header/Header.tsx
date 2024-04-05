import cx from 'clsx';
import { useEffect, useState } from 'react';
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Burger,
  rem,
  Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconChevronDown,
} from '@tabler/icons-react';

import classes from './Header.module.scss';
import { fetchUserAttributes, getCurrentUser } from 'aws-amplify/auth';
import { IUser } from '../../Types/IUser';

// const user = {
//   name: 'Jane Spoonfighter',
//   email: 'janspoon@fighter.dev',
//   image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
// };

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getCurrentUser()
      .then(response => {
        console.log(response);
      });

    fetchUserAttributes()
      .then(response => {
        setUser({
          email: response.email,
          id: response.id,
          givenName: response.given_name,
          familyName: response.family_name,

        } as IUser);
      })
  }, [])

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} fluid size="lg">
        <Group justify="flex-end">

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

          {
            user &&
            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: 'pop-top-right' }}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton
                  className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
                  <Group gap={7}>
                    <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png" alt={user.email} radius="xl" size={20} />
                    <Stack className={classes.userStack}>
                      <Text fw={500} size="xs" lh={1} mr={3}>
                        {user.givenName} {user.familyName}
                      </Text>
                      <Text fz="xs" fw={500}>
                        {user.email}
                      </Text>
                      </Stack>
                    <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>

                <Menu.Item
                  leftSection={
                    <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                  }>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          }

        </Group>
      </Container>

    </div>
  );
}

export default Header;