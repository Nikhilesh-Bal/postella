import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-tzm1ag12omq8linw.us.auth0.com"
    clientId="T2mHV2iKDgNYkb9A8YWCZb6izqTEcamO"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/home'
    }}
  >
       <App />
  </Auth0Provider>
   
  
);

