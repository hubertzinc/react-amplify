import '@mantine/core/styles.css';
import "./App.module.scss";
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { Flex, MantineProvider, Space } from '@mantine/core';
import FederatedSignInButton from './Components/FederatedSignInButton/FederatedSignInButton';
import Home from './Pages/Home/Home';
import { FetchUserAttributesOutput, fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';
import Header from './Components/Header/Header';
import { IUser } from './Types/IUser';
import { useEffect, useState } from 'react';
import { Hub } from 'aws-amplify/utils';
import AuthComponents from './Components/Auth/AuthComponents';
import components from './Components/Auth/AuthComponents';


const App = () => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  Hub.listen('auth', ({ payload }) => {
    if (payload.event === "signedIn") {
      if (currentUser) {
        return;
      }

      checkUserSignIn();
    }
  });

  useEffect(() => {
    checkUserSignIn();
  }, []);

  const checkUserSignIn = async () => {
    const session = await fetchAuthSession();

    if (session.userSub) {
      fetchUserAttributes()
        .then((response: FetchUserAttributesOutput) => {
          setCurrentUser({
            email: response.email,
            id: response.sub,
            givenName: response.given_name,
            familyName: response.family_name || "",
            identities: response.identities ? JSON.parse(response.identities as string) : []
          } as IUser);
        })
    }
  }

  const onSignOut = () => {
    setCurrentUser(null);
  }

  return (
    <>
      <MantineProvider defaultColorScheme='dark'>
        {
          !currentUser &&
          <Space h="100" />
        }
        <Authenticator components={components}>
          {() => (
            <>
              {
                currentUser &&
                <>
                  <Header afterSignOut={onSignOut} />
                  <Home user={currentUser} />
                  <Space h="lg" />
                </>
              }
            </>
          )}
        </Authenticator>
        {
          !currentUser &&
          <Flex justify="center">
            <FederatedSignInButton />
          </Flex>
        }
      </MantineProvider>
    </>
  );
}

export default App;
