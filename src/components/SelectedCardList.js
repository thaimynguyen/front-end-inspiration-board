import Card from "./Card";
import PropTypes from "prop-types";

const SelectedCardList = ({ boardTitle, cards, deleteCard }) => {
  const getCardsJSX = (cards) => {
    return cards.map((card) => (
      <Card
        key={card.card_id}
        boardId={card.board_id}
        cardId={card.card_id}
        message={card.message}
        likeCount={card.likes_count}
        deleteCard={deleteCard}
      />
    ));
  };
  return (
    <div>
      <h2>Cards for {boardTitle}</h2>
      <ul>{getCardsJSX(cards)}</ul>
    </div>
  );
};

SelectedCardList.propTypes = {
  boardId: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      board_id: PropTypes.number.isRequired,
      card_id: PropTypes.number.isRequired,
      likes_count: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default SelectedCardList;
