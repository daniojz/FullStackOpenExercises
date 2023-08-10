import React from "react";

const Notification = ({ message, operationResult }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className={`notification ${operationResult ? "success" : "error"}`}>
      <span>{message}</span>
    </div>
  );
};

export default Notification;
