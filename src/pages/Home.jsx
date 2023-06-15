import { useState } from "react";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todo, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const inputFunction = (e, index) => {
    const updatedTodo = [...todo];
    updatedTodo[index].checked = e.target.checked;
    setTodo(updatedTodo);
  };

  const deleteFunction = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  return (
    <section className="home-section">
      <h1>ToDo List App</h1>
      <article className="output-section">
        <h2>ToDo's</h2>
        <article className="todos-list">
          {todo.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) => inputFunction(e, index)}
              />
              <p className={item.checked ? "completed" : ""}>{item.text}</p>
              <button onClick={() => deleteFunction(index)}>Delete</button>
            </div>
          ))}
        </article>
      </article>
      <article className="input-section">
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Add ToDo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form>
      </article>
    </section>
  );
};

export default Home;
