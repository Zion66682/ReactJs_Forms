import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setDisplayName(name);

    //prevent from form load refresh
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {displayName}</h1>
      <form onSubmit={handleClick}>
        <input
          id="txtName"
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
