import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);


  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardsData, userData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch(err => {
        console.error(`Не удалось получить данные. ${err}`);
      });
  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => {
        console.error(`Не получается поставить или убрать like. ${err}`);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch(err => {
        console.error(`Карточка не удалена. ${err}`);
      });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          cards={cards}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          btnText="Сохранить"
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
          name="profile"
          btnText="Сохранить"
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
          name="place"
          btnText="Создать"
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

        <PopupWithForm title="Вы уверены?" name="confirmation" btnText="Да" isOpen={false} onClose={closeAllPopups} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
