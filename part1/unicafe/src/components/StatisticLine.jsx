import React from "react";

const StatisticLine = ({ text, value, percentage }) => (
  <>
    <tr>
      <td>{text}</td>
      <td>
        {value}
        {percentage ? " %" : ""}
      </td>
    </tr>
  </>
);

export default StatisticLine;
