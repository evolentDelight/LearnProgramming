import React, { useState } from "react";
import "./App.css";

function App(props) {
  let temparray = [];
  const [val, setVal] = useState("");

  function handleChange(e) {
    setVal(e.target.value);
  }

  function handleButton(e) {
    alert("YaY");
  }

  for (let i = 0; i < props.number; i++) {
    temparray.push(
      <input type="text" key={i} value={val} onChange={handleChange} />
    );
  }

  const array = <div className="container">{temparray}</div>;

  const secretbutton = (
    <div
      className={val.includes("$0$") ? "reveal" : "hide"}
    >
      <input
        type="button"
        key={1}
        value="Secret Button Unlocked"
        onClick={handleButton}
      />
    </div>
  );

  return [array, secretbutton];
}

export default App;
