import { Button } from '@mantine/core';
import { signInWithRedirect } from 'aws-amplify/auth';

const FederatedSignInButton = () => {
  const handleEntraSignIn = async () => {
    try {
      const user = await signInWithRedirect({ provider: { custom: 'azuregranadaamplify' } });
      console.log('User signed in with Entra ID:', user);
      // Handle successful sign-in (e.g., navigate to a different page)
    } catch (error) {
      console.error('Error signing in with Entra ID:', error);
      // Handle sign-in errors
    }
  };

  return (
    <Button onClick={handleEntraSignIn} mt="30" color="cyan" variant="outline">Sign in with Entra ID</Button>
    
  );
};

export default FederatedSignInButton;