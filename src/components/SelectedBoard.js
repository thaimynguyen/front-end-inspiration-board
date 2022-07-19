import React from "react";

const SelectedBoard = ({ chosenBoard }) => {
  return (
    <div>
      <h2>{chosenBoard.title}</h2>
      <h3>{chosenBoard.owner ? `By: ${chosenBoard.owner}` : ""}</h3>
    </div>
  );
};

export default SelectedBoard;
