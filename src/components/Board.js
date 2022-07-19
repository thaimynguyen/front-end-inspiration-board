import React from "react";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

const Board = ({
  chosenBoardId,
  boardId,
  title,
  handleChosenBoardCallback,
}) => {
  return (
    <div
      className={`app-sidebar-board ${
        boardId === chosenBoardId ? "active" : ""
      }`}
      onClick={() => handleChosenBoardCallback(boardId)}
    >
      <p>{title}</p>
      <span className="spacer"></span>
      <MdDelete className="delete-btn" />
    </div>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleChosenBoardCallback: PropTypes.func.isRequired,
};

export default Board;
