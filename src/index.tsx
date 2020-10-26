import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/main/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './redux';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  button {
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  textarea {
    &:focus {
      outline: none;
    }
  }
`

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
