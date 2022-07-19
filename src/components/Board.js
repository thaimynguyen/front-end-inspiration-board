import React from "react";
import PropTypes from "prop-types";

const Board = ({ boardId, title, handleChosenBoardCallback }) => {
  return (
    <li className="boards__item">
      <button onClick={() => handleChosenBoardCallback(boardId)}>
        {title}
      </button>
    </li>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleChosenBoardCallback: PropTypes.func.isRequired,
};

export default Board;
