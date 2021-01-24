import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: "todo-0", name: "Practice using React's context API", completed: true },
  { id: "todo-1", name: "Practice using custom hooks", completed: false },
  { id: "todo-2", name: "Learn React routing", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App todos={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);


