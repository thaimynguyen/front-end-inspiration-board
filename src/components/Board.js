import React from "react";
import PropTypes from "prop-types";
import "./Board.css";

const Board = ({ boardId, title, ownersName, cards }) => {
  return (
    <ol className="boards__item">
      <button>{title}</button>
    </ol>
  );
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  ownersName: PropTypes.string.isRequired,
};

export default Board;
