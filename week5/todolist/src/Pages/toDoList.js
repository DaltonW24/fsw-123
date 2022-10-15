import	{v4 as uuidv4} from "uuid";
import { TodoList } from "./STORE.js"
import	{ useState } from 'react'	




export default function ToDoListPage() {
	const [todo, setTodo] = useState(TodoList);

	const addTodos = (toDoName, toDoValue) => {
		const newTodo = [
	...todo,
	{
	id: uuidv4(),
	ToDoName: toDoName,
	toDoDescription: toDoValue,
	isCompleted: false
				
			]
		}
}

const completeTask = id => {
	const temporaryList.findIndex(todo => todo.id)
	temporaryList[index].isCompleted = !temporarylist[index]
	setTodo(temporaryList);
};
								//This is the function that allows us to delete a todo once it is completed, and we don't need it anymore. This will be used with a box woth an x in it. 
const deleteTodo = (id) => {
	const temporaryList = [...Todos];
	const newTodo = temporaryList.filter((todo) => todo.id !==id);
	setTodos(newTodo);
};
return (
	<>
	<h3>List of Todos</h3>				
	<TodoList Todos ={Todos} completeTask={completeTask} deleteTodo ={deleteTodo}/>
	<div className="from-area">
		<h5>{TodoList}</h5>
		<FormAddItem addItem = {addTodo}/>
    </>
 </>)


// return (
// 	<li key = {todo.id}>
// 	<input
// 	type="checkbox"
// 	checked = {todo.isCompleted}
// 	onChange={() => completeTask()todo.id)}
// 	/>
// 	<span style={{ textDecoration: todo.isCompleted ? "line-through" : " " }]>
// 		{todo.ToDOName.toDoName} ({todo.toDoDescription)}
// 	</span>
// 	<button className="btn-right btn-small" onclick
// 	</li>
// 	);
// }
