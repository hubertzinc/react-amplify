import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.scss';

const Welcome = () => {

  return (
    <>
      <Title className={classes.title} ta="center" >
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          ZincStore
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This is a proof of concept showcasing the integration of AWS Cognito 
        and &nbsp;
        <Anchor href="https://zinc.com.au" size="lg" target='_blank'>
          ZincStore&nbsp;
        </Anchor>
        for user authentication utilising identity providers Cognito User Pool and Federated Sign In.
      </Text>
    </>
  )
}

export default Welcome;