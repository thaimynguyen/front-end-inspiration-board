import React from "react";
import { useState } from "react";

const SelectedBoard = ({ HandleChosenBoard }) => {
  return (
    <div>
      <h2>SelectedBoard</h2>
      <p>{HandleChosenBoard}</p>;
    </div>
  );
};

export default SelectedBoard;
