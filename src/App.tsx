import './App.css'
import { Authenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import viteLogo from '/vite.svg';

const App = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
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
  );
}

export default App;

// Hosted UI URL: https://zincstoreglobal.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?client_id=29hvg7h628crq4jnaque137cp5&response_type=token&scope=email+openid&redirect_uri=https%3A%2F%2Flocalhost%3A4310

// Fed Sign In Button Link: https://zincstoreglobal.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?identity_provider=azureadgranada&redirect_uri=https://localhost:4310&response_type=TOKEN&client_id=29hvg7h628crq4jnaque137cp5&scope=email%20openid