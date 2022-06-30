import PropTypes from "prop-types";

const Card = ({ boardId, cardId, message, deleteCard }) => {
  return (
    <li>
      <p>{message}</p>
      {/* <span className="heart_count">💕</span> */}
      {/* <button onClick={() => addHeart(id)}>+1</button> */}
      <button onClick={() => deleteCard(boardId, cardId)}>Delete</button>
    </li>
  );
};

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
//   getHeartCount: PropTypes.func.isRequired,
//   addHeart: PropTypes.func.isRequired,
//   deleteCard: PropTypes.func.isRequired,
// };

export default Card;
