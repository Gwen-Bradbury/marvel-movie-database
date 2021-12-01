import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './my-sass.scss';
import App from './App';
import Movie from  './components/movieInformation/movieInformation'

ReactDOM.render(
  <React.StrictMode>
      <App />
      <Movie />

  </React.StrictMode>,
  document.getElementById('root')
);
