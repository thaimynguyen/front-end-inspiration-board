import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import "./Card.css";

const Card = ({ cardData, deleteCard, addLike }) => {
  return (
    <div className="card">
      <p>{cardData.message}</p>
      <div className="card-footer">
        <div className="like-count">
          <span> {cardData.likes_count}</span>
          <span onClick={() => addLike(cardData.board_id, cardData.card_id)}>
            💕
          </span>
        </div>
        <MdDelete
          onClick={() => deleteCard(cardData.board_id, cardData.card_id)}
        />
      </div>
    </div>
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
