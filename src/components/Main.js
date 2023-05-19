import React, { useEffect } from "react";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("#");

  React.useEffect(() => {

  })

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={onEditAvatar}>
          <img src="#" alt="Аватар профиля" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title"> </h1>
          <button className="profile__edit-button" type="button" title="Редактировать профиль" onClick={onEditProfile}></button>
          <p className="profile__subtitle"></p>
        </div>
        <button className="profile__add-button" type="button" title="Добавить место" onClick={onAddPlace}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">

        </ul>
      </section>
    </main>
  );
}

export default Main;