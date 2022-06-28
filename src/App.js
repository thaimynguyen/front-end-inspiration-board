import "./App.css";
import React from "react";
import { useState, useEffect, axios } from "react";
import BoardList from "./components/BoardList";
import SelectedBoard from "./components/SelectedBoard";
import BoardForm from "./components/BoardForm";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";
import CardList from "./components/CardList";

const defaultChosenBoard = "Select a Board from the Board List!";

function App() {
  const [boards, setBoards] = useState([]);
  const [chosenBoard, setChosenBoard] = useState(defaultChosenBoard);

  const HandleChosenBoard = (title) => {
    setChosenBoard(title);
  };

  useEffect(() => {
    getBoardsFromAPI();
  }, []);

  const getBoardsFromAPI = () => {
    axios
      .get("")
      .then((response) => {
        setBoards(response.data);
      })
      .catch((error) => console.log(`Cannot get the data ${error}`));
  };

  const handleBoardFormSubmission = (data) => {
    axios
      .post("", data)
      .then((response) => {
        getBoardsFromAPI();
      })
      .catch((error) => {
        console.log(`Unable to add a new board  ${error}`);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <BoardList boards={boards} HandleChosenBoard={HandleChosenBoard} />
        <SelectedBoard HandleChosenBoard={HandleChosenBoard} />
        <BoardForm handleBoardFormSubmission={handleBoardFormSubmission} />
        <CardList
          boardId={board_id}
          getHeartCount={getHeartCount}
          addHeart={addHeart}
          deleteCard={deleteCard}
        />
        <NewCardForm />
      </main>
    </div>
  );
}

export default App;
