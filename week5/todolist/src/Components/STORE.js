import	{v4 as uuidv4} from "uuid";
export const TodoList = [
    {
        id: uuidv4(),
        TodoName: "Wake Up",
        ToDoDescription: "Wake up at 6AM",
        isCompleted: true
    },
    {
        id:uuidv4(),
        TodoName: "School",
        ToDoDescription: "Take brother to school",
        isCompleted: true
    },
    {
        id:uuidv4(),
        TodoName: "Work",
        ToDoDescription: "Do my schoolwork",
        isCompleted: true
    },
    {
        id:uuidv4(),
        TodoName: "Sleep",
        ToDoDescription: "Go to sleep",
        isCompleted: false
    },
]