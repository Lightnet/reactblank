
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "../components/app.js"

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  document.body.appendChild(root);

  ReactDOM.render(<App />, document.getElementById('root'));
});