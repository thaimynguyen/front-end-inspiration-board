import PropTypes from "prop-types";
import { useState } from "react";

const defaultCard = { message: "" };

const NewCardForm = ({ chosenBoardId, handleSubmission }) => {
  const [cardData, setCardData] = useState(defaultCard);

  const handleFormInput = (event) => {
    const newCardData = { ...cardData };
    newCardData[event.target.name] = event.target.value;
    setCardData(newCardData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    handleSubmission(chosenBoardId, cardData);
    setCardData(defaultCard);
  };

  return (
    <div>
      <h2>Create a new card</h2>
      <form onSubmit={handleFormSubmission}>
        <label htmlFor="message">Message</label>
        <input
          name="message"
          type="text"
          value={cardData.message}
          onChange={handleFormInput}
          required
        />
        <label htmlFor="preview">Preview</label>
        <input
          name="preview"
          type="text"
          value={cardData.message}
          onChange={handleFormInput}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

NewCardForm.propTypes = {
  chosenBoardId: PropTypes.number.isRequired,
  handleSubmission: PropTypes.func.isRequired,
};

export default NewCardForm;
