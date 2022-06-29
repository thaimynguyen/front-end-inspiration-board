import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BoardList from "./components/BoardList";
import SelectedBoard from "./components/SelectedBoard";
import BoardForm from "./components/BoardForm";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";

const defaultChosenBoard = "Select a Board from the Board List!";

function App() {
  const [boards, setBoards] = useState([]);
  const [chosenBoard, setChosenBoard] = useState(defaultChosenBoard);

  const handleChosenBoard = (boardId) => {
    console.log(boardId);
    console.log("Inside HandleChosenBoard");
    axios
      .get(`https://valt-backend-inpboard.herokuapp.com/boards/${boardId}`)
      .then((response) => {
        console.log(response.data);
        const chosenBoard = `${response.data.title} - ${response.data.owner}`;
        setChosenBoard(chosenBoard);
      })
      .catch((error) => console.log(`Cannot get the data ${error}`));
  };

  useEffect(() => {
    console.log("Inside the useEffect");
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
        {/* <CardList
          boardId={board_id}
          getHeartCount={getHeartCount}
          addHeart={addHeart}
          deleteCard={deleteCard}
        />
        <NewCardForm /> */}
      </main>
    </div>
  );
}

export default App;
