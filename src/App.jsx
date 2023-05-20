import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import todoData from "./todoData";
// import Example from "./components/Example";
const App = () => {
  const [todos, setTodos] = useState(todoData);

  

  function handleChange(id) {
    setTodos((prevState) => {
      const updatedTodos = prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return updatedTodos;
    });
  }

  const todoItems = todos.map((item) => (
    <ToDoItem key={item.id} {...item} handleChange={handleChange} />
  ));

  return (
    <div className="todo-list">
      {todoItems}

      {/* <Example/> */}
    </div>
  );
};

export default App;
