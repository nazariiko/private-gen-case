import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import App from './App';

import { store } from './redux/store';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    font-family: 'Gaegu', cursive;
    letter-spacing: 1px;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    background-color: #FFD2DA;

    #root {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Reset />
        <GlobalStyle />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
