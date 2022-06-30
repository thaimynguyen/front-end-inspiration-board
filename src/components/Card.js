import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";

const Card = ({ boardId, cardId, message, likeCount, deleteCard }) => {
  const [currentLikeCount, setLikeCount] = useState(likeCount);
  const increaseLikeCountAPICall = (cardId) => {
    axios
      .patch(`https://valt-backend-inpboard.herokuapp.com/cards/${cardId}/like`)
      .then((response) => {
        setLikeCount(response.data.likes_count);
      })
      .catch((error) => {
        console.log(
          `Unable to increase like count of card ${cardId} due to ${error}`
        );
      });
  };
  return (
    <li>
      <p>{message}</p>
      <span className="heart_count">{currentLikeCount}💕</span>
      <button onClick={() => increaseLikeCountAPICall(cardId)}>+1</button>
      <button onClick={() => deleteCard(boardId, cardId)}>Delete</button>
    </li>
  );
};

Card.propTypes = {
  boardId: PropTypes.number.isRequired,
  cardId: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
