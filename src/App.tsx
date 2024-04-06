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
      <MantineProvider>
        {
          !currentUser &&
          <Space h="100" />        }
        <Authenticator>
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

// Hosted UI URL: https://zincstoreglobal.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?client_id=29hvg7h628crq4jnaque137cp5&response_type=token&scope=email+openid&redirect_uri=https%3A%2F%2Flocalhost%3A4310

// Fed Sign In Button Link: https://zincstoreglobal.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?identity_provider=azureadgranada&redirect_uri=https://localhost:4310&response_type=TOKEN&client_id=29hvg7h628crq4jnaque137cp5&scope=email%20openid
// Fed Sign In Button Link:https://hdamplify.auth.ap-southeast-2.amazoncognito.com/oauth2/authorize?redirect_uri=http%3A%2F%2Flocalhost%3A4310%2F&response_type=code&client_id=56iv34do8ifj9111bdikdtlsia&identity_provider=azuregranadaamplify&scope=openid%20email%20phone%20profile%20aws.cognito.signin.user.admin%20&state=E4C6EMVUSVFeN08XoHFLcX9HnW2HnDOe&code_challenge=ARpjrY-Dih9Ml5_kI0RFV-cFPmYUFiozRQF939FfoBU&code_challenge_method=S256
// '/oauth2/authorize?identity_provider=azuregranadaamplify&redirect_uri=https://localhost:4310&response_type=CODE&client_id=56iv34do8ifj9111bdikdtlsia&scope=email openid profile'