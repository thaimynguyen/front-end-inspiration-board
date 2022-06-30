import Card from "./Card";
import PropTypes from "prop-types";

const SelectedCardList = ({ boardTitle, cards, deleteCard, addLike }) => {
  const cardListJSX = cards
    .sort((a, b) => a.card_id - b.card_id)
    .map((card) => (
      <Card
        key={card.card_id}
        cardData={card}
        deleteCard={deleteCard}
        addLike={addLike}
      />
    ));

  return (
    <div>
      <h2>Cards for {boardTitle}</h2>
      <ul>{cardListJSX}</ul>
    </div>
  );
};

SelectedCardList.propTypes = {
  boardTitle: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number.isRequired,
      card_id: PropTypes.number.isRequired,
      likes_count: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
};

export default SelectedCardList;
