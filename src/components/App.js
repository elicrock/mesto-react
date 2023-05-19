import React from "react";
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <>
      <div className="page">

        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
        />
        <Footer />

        <PopupWithForm
          title="Обновить аватар"
          name="editAvatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input type="url" name="avatar" id="link-avatar" className="popup__input popup__input_el_url-avatar"
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-avatar-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          title="Редактировать профиль"
          name="profileEdit"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input type="text" name="user-name" id="user-input" className="popup__input popup__input_el_name" minLength="2"
              maxLength="40" placeholder="Имя" required />
            <span className="popup__input-error user-input-error"></span>
          </label>
          <label className="popup__label">
            <input type="text" name="about" id="about-input" className="popup__input popup__input_el_about" minLength="2"
              maxLength="200" placeholder="О себе" required />
            <span className="popup__input-error about-input-error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="addPlace"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__label">
            <input type="text" name="place-name" id="place-input" className="popup__input popup__input_el_name-place"
              minLength="2" maxLength="30" placeholder="Название" required />
            <span className="popup__input-error place-input-error"></span>
          </label>
          <label className="popup__label">
            <input type="url" name="link" id="link-place" className="popup__input popup__input_el_url-place"
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-place-error"></span>
          </label>
        </PopupWithForm>

      </div>
    </>
  );
}

export default App;
