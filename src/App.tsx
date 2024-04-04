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
