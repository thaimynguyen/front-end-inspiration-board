import PropTypes from "prop-types";

const Card = ({ message }) => {
  return (
    <li>
      <p>{message}</p>
      {/* <span class="heart_count">{() => getHeartCount(id)}💕</span>
    <button onClick={() => addHeart(id)}>+1</button>
    <button onClick={() => deleteCard(id)}>Delete</button> */}
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
