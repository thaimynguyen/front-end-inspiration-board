import React from "react";
import { useState } from "react";

const SelectedBoard = ({ chosenBoard }) => {
  return (
    <div>
      <h2>SelectedBoard</h2>
      <p>{chosenBoard}</p>;
    </div>
  );
};

export default SelectedBoard;
