import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(false);

  const [isHover, setIsHover] = useState("");

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

  function mouseEnterHandler(e) {
    const alt = e.target.getAttribute("alt"); //React logo
    setIsHover(alt);
  }

  function mouseLeaveHandler() {
    setIsHover(false);
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
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              src="/vite.svg"
              className={`logo ${
                count >= 1 || isHover === "Vite logo" ? "active" : ""
              }`}
              alt="Vite logo"
            />
            <p>+</p>
            <img
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              src="/react.svg"
              className={`logo ${
                count >= 2 || isHover === "React logo" ? "active" : ""
              }`}
              alt="React logo"
            />
            <p>=</p>
            <img
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              src="/love.svg"
              className={`logo ${
                count >= 3 || isHover === "Love logo" ? "active" : ""
              }`}
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
