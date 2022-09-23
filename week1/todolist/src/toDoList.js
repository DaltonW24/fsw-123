
import todos from "./Store"
function ToDoList(props) {

    return (
      <div>
        <h1>List of To Do's</h1>
        <ul>
          <li>
            {todos.map}
          </li>
        </ul>
      </div>
    );
  }
  
  export default ToDoList ;