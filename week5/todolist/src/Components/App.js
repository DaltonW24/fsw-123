import {BrowserRouter, Routes, Route, Link} from "react"
import HomePage from "./pages/HomePage";
import TodoList from "pages/ToDoList"
import SearchGiphyPage from "./pages/SearchGiphyPage"
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <ul id="Main-menu">
        <span className='menu-label'>Main Menu: </span>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/ToDoList'>To Do List</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </header>
      <main>
        <Routes>	
		      <Route exact={true} path="/" element {...HomePage}></Route>
		      <Route path="./ToDoList" element={<DogPage />}></Route>
		      <Route> path="./search" element={<SearchGiphyPage />}</Route>
        </Routes>
      </main>
      </BrowserRouter>	
        
  );
}
