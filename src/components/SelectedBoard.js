import React from "react";

const SelectedBoard = ({ chosenBoard }) => {
  return (
    <div>
      <h2>Selected Board</h2>
      <p>
        {chosenBoard.title} {chosenBoard.owner ? `- ${chosenBoard.owner}` : ""}
      </p>
    </div>
  );
};

export default SelectedBoard;
