import { Card, Container, Space, Stack, Text } from '@mantine/core';
import classes from './UserCard.module.scss';
import { IUser } from '../../Types/IUser';

export interface IUserCardProps {
  user: IUser;
}

const UserCard = ({ user }: IUserCardProps) => {
  return (
    <Container size="xxs">
      <Card withBorder padding="xl" radius="md" className={classes.card}>
        <Card.Section
          h={140}
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
          }} />

        <Text ta="center" fz="lg" fw={500} mt="sm">
          {user.givenName} {user.familyName}
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          {user.email}
        </Text>
      </Card>
    </Container>
  )
}

export default UserCard;