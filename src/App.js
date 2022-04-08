import "./styles.css";
import { useState } from "react";
export default function App() {
  let obj = [1, 2, 3];
  function handle(e) {
    // console.log(e.target.lastChild.style.display);
    if (e.target.lastChild.style.display == "none") {
      e.target.lastChild.style.display = "block";
    } else {
      e.target.lastChild.style.display = "none";
    }
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ display: "flex" }}>
        {obj.map((ele, i) => (
          <div
            key={i}
            onClick={handle}
            style={{
              height: "150px",
              width: "150px",
              backgroundColor: "blue",
              margin: "10px",
              position: "relative"
            }}
          >
            <h2>{ele}</h2>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                backgroundColor: "red",
                display: "none"
              }}
            >
              Qamar
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
