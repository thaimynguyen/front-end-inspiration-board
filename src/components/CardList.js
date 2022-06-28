import Card from "./Card";
import PropTypes from "prop-types";

const CardList = ({ cards, getHeartCount, addHeart, deleteCard }) => {
  const getCardsJSX = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.id}
          id={card.id}
          message={card.message}
          addHeartCount={addHeart}
          addHeart={addHeart}
          deleteCard={deleteCard}
        />
      );
    });
  };
  return <ul>{getCardsJSX(cards)}</ul>;
};

Cards.propTypes = {
  cardss: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
  addHeartCount: PropTypes.func.isRequired,
  addHeart: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

export default CardList;
