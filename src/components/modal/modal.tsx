import React, {FC, ReactNode, useEffect} from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import "./modal.scss";

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: FC<IModalProps> = ({ children, onClose }) => {

    const escapeModal = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            e.preventDefault();
            onClose()
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", escapeModal);
        return () => {
            document.removeEventListener("keydown", escapeModal);
        };
    }, []);


  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose}/>
      <div className={"modal"}>{children}</div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
