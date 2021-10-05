import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './components/App';

ReactDOM.render(
    <HashRouter>
    <App />
    </HashRouter>,
  document.getElementById('root')
);

