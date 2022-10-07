import ToDoList from './toDoList';
import {Todos} from "./Store"
import './App.css';

function App() { 
    return (
  
      <div>
      <ToDoList Todos={Todos} />
      
      </div>
    ); 
  }
export default App;  
