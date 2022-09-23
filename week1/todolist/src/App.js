import ToDoList from './toDoList';
import todos from "./Store"
import './App.css';
function App() {
    return (
  
      <div>
      <ToDoList todos={todos}/>
      </div>
    );
  }
export default App;
