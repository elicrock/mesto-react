import React, { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading, onCloseOverlay }) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    if(isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [isOpen, currentUser])

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      btnText={isLoading ? 'Сохранение' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onCloseOverlay={onCloseOverlay}
    >
      <label className="popup__label">
        <input type="text" name="user-name" id="user-input" className="popup__input popup__input_el_name" minLength="2" maxLength="40" placeholder="Имя" value={name} onChange={handleNameChange} required />
        <span className="popup__input-error user-input-error"></span>
      </label>
      <label className="popup__label">
        <input type="text" name="about" id="about-input" className="popup__input popup__input_el_about" minLength="2" maxLength="200" placeholder="О себе" value={description} onChange={handleDescriptionChange} required />
        <span className="popup__input-error about-input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup;