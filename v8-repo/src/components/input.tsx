import React, { useState } from "react";

/*const InputFunktion = () => {
    const [inputvalue, setinputvalue] = useState("");

    const handelClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputvalue(e.target.value);
    };

    return (
        <>
            <input type="text" onChange={handelClick} value={inputvalue} />
            <p>You wrote: {inputvalue}</p>
        </>
    );
};

export default InputFunktion;*/


const InputFunktion = () => {
  const [inputvalue, setinputvalue] = useState("");
  const handelClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputvalue(e.target.value);
  }
  return (
    <>
    <input type="text" onChange={handelClick} value={inputvalue} />
    <p>you wrote: {inputvalue}</p>
    <hr />
    checkbox: <input type="checkbox" />
    <hr />
    Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
    </>
  );
}
export default InputFunktion;