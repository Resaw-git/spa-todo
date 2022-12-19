import React, { useEffect } from "react";
import "./app.scss";
import Projects from "../../pages/projects/projects";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { closeModal } from "../../services/actions/modal";
import Alert from "../alert/alert";
import {  fetchProjects } from "../../services/actions/project";

const App = () => {
  const { modalOpen } = useAppSelector((store) => store.modal);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  const onClose = () => {
    closeModal(dispatch);
  };

  return (
    <div className="main m-5">
        <Alert />
        <Projects />
        <Modal show={modalOpen} onHide={onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary" onClick={onClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};

export default App;
