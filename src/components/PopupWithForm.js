import React from "react";

function PopupWithForm({ title, name, btnText, children, isOpen, onClose }) {

  function btnClass(btnText) {
    if (btnText === 'Да') {
      return 'popup__save-button popup__confirmation-btn';
    } else {
      return 'popup__save-button';
    }
  }

  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          {children &&
            <div className="popup__inputs">
              {children}
            </div>
          }
          <button className={btnClass(btnText)} type="submit">{btnText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;