function Main() {

  function handleEditAvatarClick(event) {
    event.target.addEventListener('click', () => {
      document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
    });
  }

  function handleEditProfileClick(event) {
    event.target.addEventListener('click', () => {
      document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
    });
  }

  function handleAddPlaceClick(event) {
    event.target.addEventListener('click', () => {
      document.querySelector('.popup_type_add-place').classList.add('popup_opened');
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-button" type="button" onClick={handleEditAvatarClick}><img src="#" alt="Аватар профиля" className="profile__avatar" /></button>
        <div className="profile__info">
          <h1 className="profile__title"> </h1>
          <button className="profile__edit-button" type="button" title="Редактировать профиль" onClick={handleEditProfileClick}></button>
          <p className="profile__subtitle"></p>
        </div>
        <button className="profile__add-button" type="button" title="Добавить место" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="elements">
        <ul className="elements__list">

        </ul>
      </section>
    </main>
  );
}

export default Main;