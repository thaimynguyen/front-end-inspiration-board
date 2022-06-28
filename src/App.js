import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect, axios } from "react";
import BoardList from "./components/BoardList";
import SelectedBoard from "./components/SelectedBoard";
import BoardForm from "./components/BoardForm";

function App() {
  const [boards, setBoards] = useState([]);
  const [chosenBoard, setChosenBoard] = useState(
    "Select a Board from the Board List!"
  );

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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <BoardList boards={boards} />
        <SelectedBoard chosenBoard={chosenBoard} />
        <BoardForm />
      </main>
    </div>
  );
}

export default App;
