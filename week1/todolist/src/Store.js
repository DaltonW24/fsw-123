 function MyToDoList(){
 const Todos = ["Wake Up", "Go To School", "Do School Work", "Go to sleep" ]
const MyToDoListItems = Todos.map((Todos) =>
<li>{MyToDoListItems}</li>
);
return(
    <div>
        <h2>My To Do List</h2>
        <ul>{MyToDoListItems}</ul>
    </div>
);
}


export default MyToDoList;