import { FC, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { type AuthUser } from "aws-amplify/auth";
import { type UseAuthenticator } from "@aws-amplify/ui-react-core";


type AppProps = {
  signOut?: UseAuthenticator["signOut"]; //() => void;
  user?: AuthUser;
};

const App: FC<AppProps> = ({ signOut, user }) => {

  return (
    <div className="App bg-white">
      <header className="App-header">
        <img src={viteLogo} className="App-logo" alt="vite logo" />

        <Heading level={1}>Hello {user?.username}</Heading>
        <Button onClick={signOut}>Sign out</Button>
        <h2>Amplify Todos</h2>
        <p>
          User: {user ? JSON.stringify(user, null, 2) : "None"}
        </p>
      </header>
    </div>
  )
}

export default withAuthenticator(App)
