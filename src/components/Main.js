import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("#");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cardsData, userData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar)
        setCards(cardsData);
      })
      .catch(err => {
        console.error(`Не удалось получить данные. ${err}`);
      });
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={onEditAvatar}>
          <img src={userAvatar} alt="Аватар профиля" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-button" type="button" title="Редактировать профиль" onClick={onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" title="Добавить место" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">

        </ul>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {
            cards.map((card) => (<Card key={card._id} card={card} onCardClick={onCardClick} />))
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;