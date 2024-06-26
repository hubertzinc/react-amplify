import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.scss';
import { useMantineColorScheme } from '@mantine/core';
import { useEffect } from 'react';

const Welcome = () => {
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    // setColorScheme("dark");
  }, []);

  return (
    <>
      <Title className={classes.title} ta="center" >
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          ZincStore
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This is a proof of concept project that integrates AWS Cognito, Federated Sign In and&nbsp;
        <Anchor href="https://zinc.com.au" size="lg" target='_blank'>
          ZincStore
        </Anchor>
        .
      </Text>
    </>
  )
}

export default Welcome;