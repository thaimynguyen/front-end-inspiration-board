import Card from "./Card";
import PropTypes from "prop-types";
import { useState } from "react";

const SelectedCardList = ({ boardTitle, cards, deleteCard, addLike }) => {
  const cardListJSXSortById = cards
    .sort((a, b) => a.card_id - b.card_id)
    .map((card) => (
      <Card
        key={card.card_id}
        cardData={card}
        deleteCard={deleteCard}
        addLike={addLike}
      />
    ));

  const cardListJSXSortByAlphabetically = cards
    .sort((a, b) => a.message.localeCompare(b.message))
    .map((card) => (
      <Card
        key={card.card_id}
        cardData={card}
        deleteCard={deleteCard}
        addLike={addLike}
      />
    ));

  const cardListJSXSortByNumberofLikes = cards
    .sort((a, b) => a.likes_count - b.likes_count)
    .map((card) => (
      <Card
        key={card.card_id}
        cardData={card}
        deleteCard={deleteCard}
        addLike={addLike}
      />
    ));

  const [cardListData, setCardListData] = useState(cardListJSXSortById);

  const updateCardListData = () => {
    const select = document.getElementById("dropDownOptions");
    if (select.value === "byId") {
      setCardListData(cardListJSXSortById);
    } else if (select.value === "byAlphabetically") {
      setCardListData(cardListJSXSortByAlphabetically);
    } else if (select.value === "byNumber") {
      setCardListData(cardListJSXSortByNumberofLikes);
    }
  };

  return (
    <div>
      <h2>Cards for {boardTitle}</h2>
      <label for="sorts">Sort:</label>
      <select id="dropDownOptions" onChange={updateCardListData}>
        <option value="byId">Sort by ID</option>
        <option value="byAlphabetically">Sort alphabetically</option>
        <option value="byNumber">Sort by number of "+1"s</option>
      </select>
      <ul>{cardListData}</ul>
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
