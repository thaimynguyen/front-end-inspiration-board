import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BoardList from "./components/BoardList";
import SelectedBoard from "./components/SelectedBoard";
import BoardForm from "./components/BoardForm";
import SelectedCardList from "./components/SelectedCardList";
import NewCardForm from "./components/NewCardForm";

const defaultChosenBoard = { title: "Select a Board from the Board List!" };

function App() {
  const [boards, setBoards] = useState([]);
  const [chosenBoard, setChosenBoard] = useState(defaultChosenBoard);

  const handleChosenBoard = (boardId) => {
    axios
      .get(
        `https://valt-backend-inpboard.herokuapp.com/boards/${boardId}/cards`
      )
      .then((response) => {
        console.log(response.data);
        // const chosenBoard = `${response.data.title} - ${response.data.owner}`;
        const chosenBoard = response.data;
        setChosenBoard(chosenBoard);
      })
      .catch((error) => console.log(`Cannot get the data ${error}`));
  };

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get("https://valt-backend-inpboard.herokuapp.com/boards")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => console.log(`Cannot get the data ${error}`));
  };

  const makeNewBoard = (data) => {
    axios
      .post("https://valt-backend-inpboard.herokuapp.com/boards", data)
      .then((response) => {
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log(`Unable to add a new board  ${error}`);
      });
  };

  const makeNewCard = (boardId, data) => {
    axios
      .post(
        `https://valt-backend-inpboard.herokuapp.com/boards/${boardId}/cards`,
        data
      )
      .then(() => {
        handleChosenBoard(boardId);
      })
      .catch((error) => {
        console.log(`Unable to add a new card  ${error}`);
      });
  };

  const deleteCard = (boardId, cardId) => {
    axios
      .delete(`https://valt-backend-inpboard.herokuapp.com/cards/${cardId}`)
      .then(() => {
        handleChosenBoard(boardId);
      })
      .catch((error) => {
        console.log(`Unable to add a new card  ${error}`);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <BoardList
          boards={boards}
          handleChosenBoardCallback={handleChosenBoard}
        />
        <SelectedBoard chosenBoard={chosenBoard} />
        <BoardForm newBoardSubmission={makeNewBoard} />
        {chosenBoard.title !== defaultChosenBoard.title && (
          <SelectedCardList
            boardId={chosenBoard.board_id}
            cards={chosenBoard.cards}
            deleteCard={deleteCard}
          />
        )}

        {chosenBoard.board_id && (
          <NewCardForm
            chosenBoardId={chosenBoard.board_id}
            handleSubmission={makeNewCard}
          />
        )}
      </main>
    </div>
  );
}

export default App;
