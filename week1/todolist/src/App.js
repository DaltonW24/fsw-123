import ToDoList from './toDoList';
import {Todos} from "./Store"
import './App.css';
import { useState} from "./react"

function App() { 
  const [todos, setTodos] = useState(Todos)
    return (
  
      <div>
      <ToDoList Todos={Todos} />
      
      
      </div>
    ); 
  }
  const completeTodo = id =>{
    const changeList = [...Todos];
    const index = changeList.findIndex(todo => todo.id === id);
    changeList[index].isCompleted = !changeList[index].changeList
    setTodos(changeList)
  }

   
  const deleteTodo = (id) =>{
    const changeList = [...Todos];
    const newTodos = changeList.filter((todo) => todo.id !== id);
    setTodos(newTodos
  }

export default App;   
