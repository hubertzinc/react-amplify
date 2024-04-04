import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: '56iv34do8ifj9111bdikdtlsia',
      userPoolId: 'ap-southeast-2_4yJsIp9Jr',
      loginWith: { // Optional
        oauth: {
          domain: 'hdamplify.auth.ap-southeast-2.amazoncognito.com',
          scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
          redirectSignIn: ['http://localhost:4310/','https://example.com/'],
          redirectSignOut: ['http://localhost:4310/','https://example.com/'],
          responseType: 'code',
        },
        username: true,
        email: false, // Optional
        phone: false, // Optional
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
