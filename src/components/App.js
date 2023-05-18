import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="page">

        <Header />
        <Main />
        <Footer />

      </div>

      <div className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="editAvatar" novalidate>
            <div className="popup__inputs">
              <label className="popup__label">
                <input type="url" name="avatar" id="link-avatar" className="popup__input popup__input_el_url-avatar" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error link-avatar-error"></span>
              </label>
            </div>
            <button className="popup__save-button" type="submit">Cохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_edit-profile">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="profileEdit" novalidate>
            <div className="popup__inputs">
              <label className="popup__label">
                <input type="text" name="user-name" id="user-input" className="popup__input popup__input_el_name" minlength="2" maxlength="40" placeholder="Имя" required />
                <span className="popup__input-error user-input-error"></span>
              </label>
              <label className="popup__label">
                <input type="text" name="about" id="about-input" className="popup__input popup__input_el_about" minlength="2" maxlength="200" placeholder="О себе" required />
                <span className="popup__input-error about-input-error"></span>
              </label>
            </div>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-place">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="addPlace" novalidate>
            <div className="popup__inputs">
              <label className="popup__label">
                <input type="text" name="place-name" id="place-input" className="popup__input popup__input_el_name-place" minlength="2" maxlength="30" placeholder="Название" required />
                <span className="popup__input-error place-input-error"></span>
              </label>
              <label className="popup__label">
                <input type="url" name="link" id="link-place" className="popup__input popup__input_el_url-place" placeholder="Ссылка на картинку" required />
                <span className="popup__input-error link-place-error"></span>
              </label>
            </div>
            <button className="popup__save-button" type="submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_view-image">
        <div className="popup__container-image">
          <button className="popup__close-button" type="button"></button>
          <img src="#" alt="#" className="popup__img" />
          <h2 className="popup__title-img"> </h2>
        </div>
      </div>

      <div className="popup popup_type_confirmation">
        <div className="popup__container">
          <button className="popup__close-button" type="button"></button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form" name="confirmationForm" novalidate>
            <button className="popup__save-button popup__confirmation-btn" type="submit">Да</button>
          </form>
        </div>
      </div>

      <template id="place-template">
        <li className="element">
          <button type="button" className="element__delete-btn"></button>
          <img src="#" alt="" className="element__img" />
          <div className="element__caption">
            <h2 className="element__title"> </h2>
            <div className="element__like">
              <button type="button" className="element__like-btn"></button>
              <p className="element__likes-counter"></p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;
