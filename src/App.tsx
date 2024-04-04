import { FC } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Authenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";


type AppProps = {
  signOut?: UseAuthenticator["signOut"]; //() => void;
  user?: AuthUser;
};

const App: FC<AppProps> = ({ signOut, user }) => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App bg-white">
          <div>{user?.username}</div>
          <Button onClick={signOut}>Sign Out</Button>
        </div>
        
      )}
    </Authenticator>
  );
}

export default App;
