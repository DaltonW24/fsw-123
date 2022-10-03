import ToDoList from './toDoList';
import Store from "./Store"
import './App.css';

function App(Todos, MyToDoListItems) { 
    return (
  
      <div>
      <ToDoList />
      <Store MyToDoListItems={MyToDoListItems} Todos={Todos}/>
      </div>
    ); 
  }
export default App; 
