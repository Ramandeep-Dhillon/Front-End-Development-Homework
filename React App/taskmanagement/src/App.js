import logo from './logo.svg';
import './App.css';
import TodoList from './TodoLst';
import data from './data.json';
import {useState} from 'react';

function App() {
  const [todoList_, settodoList] = useState(data)
  
  const handleToggle_ = (id) => {
    var mappedList = todoList_.map((task) => {
      return task.id == id ? {... task , complete : !task.complete} : {... task}
    })
    settodoList(mappedList)
  }
  return (
    <div className="App">
      <TodoList todoList = {todoList_} handleToggle = {handleToggle_}/>
    </div>
  );
}

export default App;
