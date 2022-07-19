import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { HiOutlineHeart } from "react-icons/hi";

const Card = ({ cardData, deleteCard, addLike }) => {
  return (
    <li>
      <p>{cardData.message}</p>
      <span className="heart_count">{cardData.likes_count}💕</span>
      <button onClick={() => addLike(cardData.board_id, cardData.card_id)}>
        <HiOutlineHeart />
      </button>
      <button onClick={() => deleteCard(cardData.board_id, cardData.card_id)}>
        <MdDelete />
      </button>
    </li>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    board_id: PropTypes.number.isRequired,
    card_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired,
  }),
  deleteCard: PropTypes.func.isRequired,
};

export default Card;
