import React from "react";
import "./app.scss";
import Projects from "../../pages/projects/projects";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Tasks from "../../pages/tasks/tasks";
import Modal from "../modal/modal"
import {closeModal} from "../../services/actions/modal";

const App = () => {
    const { selectedProject } = useAppSelector(store => store.projectsState)
    const { modalOpen } = useAppSelector(store => store.modal)

    const dispatch = useAppDispatch()

    function onClose() {
        closeModal(dispatch)
    }


  return (
    <div className="main">
        {Object.keys(selectedProject).length ? <Tasks/> : <Projects />}
        {modalOpen && (
            <Modal onClose={onClose}>
                <Tasks />
            </Modal>
        )}

    </div>
  );
}

export default App;
