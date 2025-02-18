import { useState } from "react";
import './Dropdowns.scss';

const DropDown = () => {
  const [dropdownValue, setDropdownValue] = useState("");

  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(e.target.value);
  };
  

  return (
    <>
    <div className="dropdown-container">
      <hr />
      <h1>Here is my Dropdowns component!</h1>
      <select name="dropdown" id="dropdown" onChange={handleClick} value={dropdownValue}>
        <option value="">-- Select an animal --</option>
        <option value="lion">Lion</option>
        <option value="hamster">Hamster</option>
        <option value="cow">Cow</option>
      </select>
      <p>You selected this: {dropdownValue || "Nothing yet"}</p>
      <hr />
      </div>
    </>
  );
};

export default DropDown;
