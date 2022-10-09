
function ToDoList(props) {
  const mappedTodos = props.Todos.map((todo =>
    <li>{todo.text}</li>))
    return (
      <div>
        <h1>List of To Do's</h1>
        <ul>
        {mappedTodos}
        </ul>
      </div>
    );  
  }
  
  export default ToDoList ;  
