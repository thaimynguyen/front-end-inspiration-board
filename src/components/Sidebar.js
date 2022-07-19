import BoardList from "./BoardList";
import BoardForm from "./BoardForm";

const SideBar = (props) => {
  return (
    <div className="app-sidebar">
      <BoardList
        boards={props.boards}
        handleChosenBoardCallback={props.handleChosenBoardCallback}
      />
      <BoardForm newBoardSubmission={props.newBoardSubmission} />
    </div>
  );
};

export default SideBar;
