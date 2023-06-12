import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({ card, isOpen, onClose, onCardDelete, onCloseOverlay }) {

  function handleSubmit(e) {
    e.preventDefault();

    onCardDelete(card);
    onClose();
  }

  return (
    <PopupWithForm title="Вы уверены?" name="confirmation" btnText="Да" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} onCloseOverlay={onCloseOverlay} />
  )
}

export default ConfirmPopup;