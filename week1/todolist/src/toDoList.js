
import Todos from "./Store"
function ToDoList(props) {

    return (
      <div>
        <h1>List of To Do's</h1>
        <ul>
          <li>
            {Todos}
          </li>
        </ul>
      </div>
    );
  }
  
  export default ToDoList ; 