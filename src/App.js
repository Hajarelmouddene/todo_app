import { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";


const FILTER_OPTIONS = {
  All: () => true,
  Active: todo => !todo.completed,
  Completed: todo => todo.completed
};

const FILTER_NAMES = Object.keys(FILTER_OPTIONS);

function App(props) {
  const [todos, setTodos] = useState(props.todos);
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState("dark");


  function addTodo(name) { 
    const newTodo = { id: "todo-" + nanoid(), name: name, completed: false };
    setTodos([...todos, newTodo]);
  }
  
  function toggleTodoCompleted(id) {
    const updatedTodos = todos.map(todo => {
      if (id === todo.id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    const remainingTodos = todos.filter(todo => id !== todo.id);
    setTodos(remainingTodos);
  }
  
  
  const todoList = todos.filter(FILTER_OPTIONS[filter]).map(todo => (
    <Todo 
    id={todo.id} 
    name={todo.name} 
    completed={todo.completed} 
    key={todo.id} 
    deleteTodo={deleteTodo} 
    toggleTodoCompleted={toggleTodoCompleted} 
    />
  ));

  const numberOfItems = todos.filter(todo => !todo.completed).length
  const itemsSpelling = todos.filter(todo => !todo.completed).length !== 1 ? "items" : "item";
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
    key={name} 
    name={name} 
    isPressed={name === filter} 
    setFilter={setFilter} 
    />
  ));
  const toggleTheme = () => {
    const newTheme= theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };


  return (
    <div>
      <div className="hero-img"></div>
      <div className="container">
        <div className="header">
          <h1 className="title">Todo</h1>
          <div className="theme-icon" onClick={toggleTheme}></div>
        </div>
        <Form onSubmit={addTodo}/>
        <div className="list-wrapper">
          <ul aria-labelledby="list-heading">
            {todoList}
          </ul>
          <div className="footer-container">
            <div className="items-left">{numberOfItems} {itemsSpelling} left
            </div>
            <div className="filters-desktop filter">
              {filterList}
            </div>
            <div className="clear">
              <button onClick={() => setTodos(todos.filter(todo => !todo.completed))}>Clear Completed
              </button>
            </div>
          </div>   
        </div>
        <div className="filters-mobile">
          <div className="filters-mobile-menu filter">
            {filterList}
          </div>
        </div> 
        <div className="credits">Coded by Hajar El Mouddene
        </div>   
      </div>
    </div>
       
  );
}


export default App;