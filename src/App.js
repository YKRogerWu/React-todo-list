import React, { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {

  const [inputText, setInput] = useState("")
  const [items, setItems] = useState([])

  function handleInput(event) {
    const value = event.target.value
    setInput(value)

  }

  function addItem(event) {

    setItems((prevValue) => {
      return [
        ...prevValue,
        inputText
      ]
    })
    setInput("")

  }

  function deleteItem(id) {
    setItems(prevValue => {
      return items.filter((item, index)=>{
        return id !== index
      })
    })
  }

  return (
    <div className="container">

      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" name="input" value={inputText} onChange={handleInput} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((item, index) =>
            <TodoItem
              key={index}
              id={index}
              item={item}
              onChecked={deleteItem}
            />
          )}
        </ul>
      </div>

    </div>
  );
}

export default App;
