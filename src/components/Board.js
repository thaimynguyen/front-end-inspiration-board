import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ boardId, title, owner, cards, handleChosenBoardCallback }) => {
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
  owner: PropTypes.string.isRequired,
  // cards: PropTypes.array.isRequired,
  handleChosenBoardCallback: PropTypes.func.isRequired,
};

export default Board;
