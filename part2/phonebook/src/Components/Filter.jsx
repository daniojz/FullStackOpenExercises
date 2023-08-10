import React from "react";

const Filter = ({ onChangeHandler }) => {
  return (
    <div>
      Search <input onChange={onChangeHandler} />
    </div>
  );
};

export default Filter;
