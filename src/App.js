import react, { useState } from 'react';

function App() {
const [result, setResult] = useState("");

 function handleclick(e) {
  setResult(result.concat(e.target.name));
}

function clear() {
  setResult("");
}

function backspace() {
  setResult(result.slice(0,-1));
}

function calculate() {

  try {
 setResult(eval(result).toString()); 
  } catch(err) {
    setResult("Error")
  }
}
  return (
   <>
<div className="container">
  <form>
    <input type="text" value={result}/>

  </form>
  <div className="keypad">
    <button  onClick={clear} id="clear">clear</button>
    <button onClick={backspace} id="backspace">c</button>
    <button name="/" onClick={handleclick}>&divide;</button>
    <button name="7" onClick={handleclick}>7</button>
    <button name="8" onClick={handleclick}>8</button>
    <button name="9" onClick={handleclick}>9</button>
    <button name="*" onClick={handleclick}>&times;</button>
    <button name="4" onClick={handleclick}>4</button>
    <button name="5" onClick={handleclick}>5</button>
    <button name="6" onClick={handleclick}>6</button>
    <button name="-" onClick={handleclick}>&ndash;</button>
    <button name="1" onClick={handleclick}>1</button>
    <button name="2" onClick={handleclick}>2</button>
    <button name="3" onClick={handleclick}>3</button>
    <button name="+" onClick={handleclick}>+</button>
    <button name="0" onClick={handleclick}>0</button>
    <button name="."onClick={handleclick}>.</button>
    <button onClick={calculate}>=</button>

  </div>
</div>
   </>
  );
}

export default App;
