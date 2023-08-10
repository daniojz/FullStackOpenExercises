import React from "react";

const Filter = ({ onChangeHandler }) => {
  return (
    <div>
      Find Countries <input onChange={onChangeHandler} />
    </div>
  );
};

export default Filter;
