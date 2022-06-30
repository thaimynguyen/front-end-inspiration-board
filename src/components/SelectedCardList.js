import Card from "./Card";
// import PropTypes from "prop-types";

const SelectedCardList = ({ chosenBoard, deleteCard }) => {
  const cards = chosenBoard.cards;
  // console.log(cards);
  // console.log(cards[0]["message"]);
  const getCardsJSX = (cards) => {
    return cards.map((card) => (
      <Card
        key={card.card_id}
        boardId={card.board_id}
        cardId={card.card_id}
        message={card.message}
        deleteCard={deleteCard}
        // addHeartCount={addHeart}
        // addHeart={addHeart}
      />
    ));
  };
  return (
    <div>
      <h2>Cards for {chosenBoard.title}</h2>
      <ul>{getCardsJSX(cards)}</ul>
    </div>
  );
};

// CardList.propTypes = {
//   cards: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   addHeartCount: PropTypes.func.isRequired,
//   addHeart: PropTypes.func.isRequired,
//   deleteCard: PropTypes.func.isRequired,
// };

export default SelectedCardList;
