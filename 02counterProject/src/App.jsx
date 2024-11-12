import { useState } from "react";
import "./App.css";

function App() {


  /*
   we use use [state hook] which update counter value using (setCounter) method and show update in 📌UI📌 easily without using [document.getelement] method which we use in 📌core JS📌

   */

  let [counter, setCounter] = useState(2);

  function addVal() {
    if (counter < 5) {
      setCounter(counter + 1);
      
    } else {
      setCounter(5);
    }
  }
  const removeVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };
  return (
    <>
      <h1>React Js </h1>
      <h3>Counter : {counter}</h3>
      <button type="button" onClick={addVal}>
        Add Value | {counter}
      </button>
      <br />
      <br />
      <button type="button" onClick={removeVal}>
        Remove Value | {counter}
      </button>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. | Counter :{" "}
        {counter}
      </p>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
