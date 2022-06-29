import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ boardId, title, owner, cards, HandleChosenBoard }) => {
  return (
    <ol className="boards__item">
      <button onClick={() => HandleChosenBoard(boardId)}>{title}</button>
    </ol>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  HandleChosenBoard: PropTypes.func.isRequired,
};

export default Board;
