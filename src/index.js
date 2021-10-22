import { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  function handleNumber1Change(e) {
    setNumber1(Number(e.target.value));
  }

  function handleNumber2Change(e) {
    setNumber2(+e.target.value);
  }

  function addNums() {
    setResult(number1 + number2);
  }

  function subtractNums() {
    setResult(number1 - number2);
  }

  function multiplyNums() {
    setResult(number1 * number2);
  }

  function divideNums() {
    setResult(number1 / number2);
  }

  function remainder() {
    setResult(number1 % number2);
  }

  function clear() {
    setNumber1(0);
    setNumber2(0);
    setResult(0);
  }

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>

      <div className="number-inputs">
        <input
          type="number"
          placeholder="0"
          value={number1}
          onChange={handleNumber1Change}
        />
        <input
          type="number"
          placeholder="0"
          value={number2}
          onChange={handleNumber2Change}
        />
      </div>

      <div class="btnRow1">
        <button onClick={clear}>CLR</button>
      </div>
      <div class="btnRow2">
        <button onClick={addNums}>+</button>
        <button onClick={subtractNums}>-</button>
      </div>

      <div class="btnRow3">
        <button onClick={multiplyNums}>*</button>
        <button onClick={divideNums}>/</button>
        <button onClick={remainder}>MOD</button>
      </div>

      <h2>{result}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
