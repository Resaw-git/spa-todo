import React from "react";
import "./tasks.scss";
import { useAppDispatch } from "../../hooks/redux";

const Tasks = () => {
  const dispatch = useAppDispatch();

  function getTaskInfo() {

  }

  function goBack() {

  }

  return (
    <>
      <h1>Choose a task</h1>
      <div className="tasks">
        <div className="task" onClick={getTaskInfo}>
          Task 1
        </div>
        <div className="task">Task 2</div>
        <div className="task">Task 3</div>
      </div>

      <button type="button" className="btn btn-primary" onClick={goBack}>
        Primary
      </button>
    </>
  );
};

export default Tasks;
