import React, {FC} from "react";
import "./modaloverlay.scss"

interface IModalOverlayProps {
  onClose: () => void
}


const ModalOverlay: FC<IModalOverlayProps> = ({ onClose }) => {
  return <div className={"modaloverlay"} onClick={onClose} />;
};

export default ModalOverlay;
