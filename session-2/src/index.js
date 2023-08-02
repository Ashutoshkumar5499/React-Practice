import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Creting React object using core React

const heading = React.createElement("h1",{id:"heading"},"Hi, This is React App");

// Crete React object using JSX--JSX is not HTML, but it looks like HTML

const headingJSX = <h1>Hi, This is react using JSX</h1>

// React Components

const titleC = ()=> <h1>Hi, This is Title</h1>;


const headingC = ()=>
 (
  <div>
  {titleC()}
  <titleC/>
    <h2>Hi, this is React Functional Component</h2>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(headingC());


