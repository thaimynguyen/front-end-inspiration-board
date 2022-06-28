import React from "react";
import PropTypes from "prop-types";
import "./BoardList.css";
import Board from "./Board";

const BoardList = ({ boards }) => {
  const getBoardListJSX = (boards) => {
    return boards.map((board) => {
      return (
        <Board
          key={board.id}
          boardId={board.board_id}
          title={board.title}
          ownersName={board.owner}
          cards={board.card_ids}
        />
      );
    });
  };
  return (
    <div>
      <h2>Boards</h2>
      <ul>{getBoardListJSX(boards)}</ul>
    </div>
  );
};

BoardList.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      boardId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      ownersName: PropTypes.string.isRequired,
      cards: PropTypes.array.isRequired,
    })
  ).isRequired,
};

export default BoardList;
