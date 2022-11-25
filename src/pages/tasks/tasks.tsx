import React from 'react';
import "./tasks.scss"
import Button from "../../components/share/button/button";
import {useAppDispatch} from "../../hooks/redux";
import {selectProject} from "../../services/actions/project";
import {openModal} from "../../services/actions/modal";

const Tasks = () => {
    const dispatch = useAppDispatch()

    function getTaskInfo() {
        openModal(dispatch)
    }

    function goBack() {
        selectProject(dispatch, {})
    }

    return (
        <>
            <h1>Choose a task</h1>
            <div className="tasks">
                <div className="task" onClick={getTaskInfo}>Task 1</div>
                <div className="task">Task 2</div>
                <div className="task">Task 3</div>
            </div>

            <Button onClick={goBack}>
                Go Back
            </Button>
        </>
    );
}

export default Tasks;