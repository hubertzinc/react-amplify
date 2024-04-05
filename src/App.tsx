import './App.css'
import { Authenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import viteLogo from '/vite.svg';
import { signInWithRedirect } from 'aws-amplify/auth';

const App = () => {
  return (
    <>
    <Authenticator>
      {({ signOut, user  }) => (
        <div className="App bg-white">
          <header>
            <img src={viteLogo} alt="Vite Logo" className="App-logo" />
            <Heading level={1}>
              <div>{user?.username}</div>
              <div>{user?.signInDetails?.loginId}</div>
            </Heading>
          </header>
          <Button onClick={signOut}>Sign Out</Button>
        </div>

      )}
    </Authenticator>
    <FederatedSignIn />
    
    </>
  );
}

const FederatedSignIn = () => {
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
    <button onClick={handleEntraSignIn}>Sign in with Entra ID</button>
  );
};


export default App;

// Hosted UI URL: https://zincstoreglobal.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?client_id=29hvg7h628crq4jnaque137cp5&response_type=token&scope=email+openid&redirect_uri=https%3A%2F%2Flocalhost%3A4310

// Fed Sign In Button Link: https://zincstoreglobal.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?identity_provider=azureadgranada&redirect_uri=https://localhost:4310&response_type=TOKEN&client_id=29hvg7h628crq4jnaque137cp5&scope=email%20openid
// Fed Sign In Button Link:https://hdamplify.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?redirect_uri=http%3A%2F%2Flocalhost%3A4310%2F&response_type=code&client_id=56iv34do8ifj9111bdikdtlsia&identity_provider=azuregranadaamplify&scope=openid%20email%20phone%20profile%20aws.cognito.signin.user.admin%20&state=E4C6EMVUSVFeN08XoHFLcX9HnW2HnDOe&code_challenge=ARpjrY-Dih9Ml5_kI0RFV-cFPmYUFiozRQF939FfoBU&code_challenge_method=S256
// '/oauth2/authorize?identity_provider=azuregranadaamplify&redirect_uri=https://localhost:4310&response_type=CODE&client_id=56iv34do8ifj9111bdikdtlsia&scope=email openid profile'