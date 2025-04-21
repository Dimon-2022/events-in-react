import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(false);

  function increaseCount() {
    setCount((prev) => prev + 1);
  }

  function decreaseCount() {
    if (count === 0) {
      return;
    }

    setCount((prev) => prev - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      {isShow && (
        <span
          onClick={() => {
            setIsShow((prev) => !prev);
          }}
          className="cross"
        >
          &times;
        </span>
      )}
      {!isShow && (
        <button
          onClick={() => {
            setIsShow((prev) => !prev);
          }}
        >
          Начать
        </button>
      )}

      {isShow && (
        <>
          <h1>Vite + React = {count >= 3 && "Love"}</h1>

          <div className="logo-container">
            <img
              style={count >= 1 ? { filter: "none" } : {}}
              src="/vite.svg"
              className="logo"
              alt="Vite logo"
            />
            <p>+</p>
            <img
              style={count >= 2 ? { filter: "none" } : {}}
              src="/react.svg"
              className="logo"
              alt="React logo"
            />
            <p>=</p>
            <img
              style={count >= 3 ? { filter: "none" } : {}}
              src="/love.svg"
              className="logo"
              alt="Love logo"
            />
          </div>

          <hr />

          <div className="card">
            <p className="count-paragraph">count is {count}</p>
            <div className="increment-buttons">
              <button onClick={increaseCount}>+1</button>
              <button onClick={decreaseCount}>-1</button>
              <button onClick={resetCount}>Reset</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
