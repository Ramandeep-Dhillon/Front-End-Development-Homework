import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './List';
import ShoppingApp from './ShoppingApp'
import reportWebVitals from './reportWebVitals';
import WorkerClass from './WorkerClass';
import Mapping from './Mapping'


var products = [
  {Name : "Apple", Price : 20},
  {Name : "Orange", Price : 10},
  {Name : "Kiwi", Price : 50}

]
ReactDOM.render(
  <React.StrictMode>
    <Mapping Products = {products} />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
