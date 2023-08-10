import React from "react";

const Form = ({
  handleOnSubmit,
  newName,
  newNumber,
  handleNameOnChange,
  handleNumberOnchange,
}) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameOnChange} />
        <br></br>
        number: <input value={newNumber} onChange={handleNumberOnchange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
