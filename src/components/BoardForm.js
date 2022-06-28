import PropTypes from "prop-types";
import { useState } from "react";

const defaultBoard = { Title: "", Owner: "" };

const BoardForm = ({ handleBoardFormSubmission }) => {
  const [boardData, setBoardData] = useState(defaultBoard);

  const handleBoardFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newBoardData = { ...boardData };
    newBoardData[name] = value;
    setBoardData(newBoardData);
  };

  const handleBoardFormSubmission = (event) => {
    event.preventDefault();
    handleBoardFormSubmission(boardData);
  };
  return (
    <form onSubmit={handleBoardFormSubmission}>
      <h2>Create A New Board</h2>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        value={boardData.title}
        onChange={handleBoardFormInput}
      />
      <label htmlFor="owner">Owner</label>
      <input
        name="owner"
        type="text"
        value={boardData.owner}
        onChange={handleBoardFormInput}
      />
      <label htmlFor="preview">Preview: {boardData.message} </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

BoardForm.propTypes = {
  handleBoardFormSubmission: PropTypes.func.isRequired,
};

export default BoardForm;
