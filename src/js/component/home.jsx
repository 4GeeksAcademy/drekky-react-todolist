import React, { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { text: inputValue, isEditing: false },
      ]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isEditing = true;
    setTodos(newTodos);
  };

  const handleSaveEdit = (index) => {
    const newTodos = [...todos];
    newTodos[index].isEditing = false;
    setTodos(newTodos);
  };

  const handleInputChangeEdit = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].text = e.target.value;
    setTodos(newTodos);
  };

  return (
    <main className='todoApp'>
      <h1 className='todoHeader'>Todos</h1>
      <div className='todo-container'>
        <div className='inputBoxSave'>
          <input
            type='text'
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder='Enter your todo...'
          />
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.isEditing ? (
                <input
                  type='text'
                  value={todo.text}
                  onChange={(e) =>
                    handleInputChangeEdit(e, index)
                  }
                />
              ) : (
                <span
                  onClick={() => handleEditTodo(index)}
                >
                  {todo.text}
                </span>
              )}
              <span
                onClick={() => handleDeleteTodo(index)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'
                >
                  <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
                </svg>
              </span>
              {todo.isEditing ? (
                <span
                  onClick={() => handleSaveEdit(index)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
                  </svg>
                </span>
              ) : null}
            </li>
          ))}
        </ul>
        <div className='itemsLeft'>
          <p>{todos.length} items left</p>
        </div>
      </div>
      <div className='bgDivContainer'>
        <div className='bgDiv1'></div>
        <div className='bgDiv2'></div>
      </div>
    </main>
  );
};

export default TodoList;
