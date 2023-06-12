import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading, onCloseOverlay }) {

  const [name, setNameImage] = useState('');
  const [link, setLinkImage] = useState('');

  function handlePlaceNameChange(e) {
    setNameImage(e.target.value);
  }

  function handlePlaceLinkChange(e) {
    setLinkImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link
    });
  }

  useEffect(() => {
    if (isOpen) {
      setNameImage('');
      setLinkImage('');
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      btnText={isLoading ? 'Сохранение' : 'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseOverlay={onCloseOverlay}
    >
      <label className="popup__label">
        <input type="text" name="place-name" id="place-input" className="popup__input popup__input_el_name-place" minLength="2" maxLength="30" placeholder="Название" value={name} onChange={handlePlaceNameChange} required />
        <span className="popup__input-error place-input-error"></span>
      </label>
      <label className="popup__label">
        <input type="url" name="link" id="link-place" className="popup__input popup__input_el_url-place" placeholder="Ссылка на картинку" value={link} onChange={handlePlaceLinkChange} required />
        <span className="popup__input-error link-place-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;