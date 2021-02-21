import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }

  function handleClick() {
    setItems([...items, item]);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
