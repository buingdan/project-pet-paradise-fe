import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './Components/GlobalStyles';
import { UserProvider } from "./context/UserContext"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </UserProvider>
  </React.StrictMode>
);
reportWebVitals();
