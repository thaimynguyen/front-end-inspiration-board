import Card from "./Card";
import PropTypes from "prop-types";
import { useState } from "react";
import "./Card.css";

const SelectedCardList = ({ cards, deleteCard, addLike }) => {
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
    .sort((a, b) => b.likes_count - a.likes_count)
    .map((card) => (
      <Card
        key={card.card_id}
        cardData={card}
        deleteCard={deleteCard}
        addLike={addLike}
      />
    ));

  // const [cardListData, setCardListData] = useState(cardListJSXSortById);

  // const updateCardListData = () => {
  //   const select = document.getElementById("dropDownOptions");
  //   if (select.value === "byId") {
  //     setCardListData(cardListJSXSortById);
  //   } else if (select.value === "byAlphabetically") {
  //     setCardListData(cardListJSXSortByAlphabetically);
  //   } else if (select.value === "byNumber") {
  //     setCardListData(cardListJSXSortByNumberofLikes);
  //   }
  // };

  const [sortOption, setSortOption] = useState("byId");
  const updateSortOption = () => {
    const selectElement = document.getElementById("dropDownOptions");
    setSortOption(selectElement.value);
  };
  const renderCards = () => {
    if (sortOption === "byId") {
      return cardListJSXSortById;
    } else if (sortOption === "byAlphabetically") {
      return cardListJSXSortByAlphabetically;
    } else if (sortOption === "byNumber") {
      return cardListJSXSortByNumberofLikes;
    }
  };
  return (
    <div>
      <select id="dropDownOptions" onChange={updateSortOption}>
        <option value="byId">Sort by ID</option>
        <option value="byAlphabetically">Sort alphabetically</option>
        <option value="byNumber">Sort by likes</option>
      </select>
      <div className=".cards-list">{renderCards()}</div>
    </div>
  );
};

SelectedCardList.propTypes = {
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
