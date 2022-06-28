import React from "react";

const SelectedBoard = ({ chosenBoard }) => {
  return (
    <div>
      <h2>SelectedBoard</h2>
      <p>{chosenBoard.title}</p>;
    </div>
  );
};

export default SelectedBoard;
