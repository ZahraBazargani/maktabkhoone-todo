import React from 'react';
import './App.css';
import TodoEntry from './components/TodoEntry';
import TodoItems from './components/TodoItems';


function App() {
  return (
    <div id="todoapp" className="todoapp">
      <TodoEntry/>
      <TodoItems/>
      
    </div>
  );
}

export default App;
