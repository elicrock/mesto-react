import React, { useEffect } from "react";

function PopupWithForm({ title, name, btnText, children, isOpen, onClose, onSubmit, onCloseOverlay }) {

  function btnClass(btnText) {
    if (btnText === 'Да') {
      return 'popup__save-button popup__confirmation-btn';
    } else {
      return 'popup__save-button';
    }
  }

  function handleCloseByEsc(e) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseByEsc);

    return () => {
      document.removeEventListener('keydown', handleCloseByEsc);
    }
  })

  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onMouseDown={onCloseOverlay}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} onSubmit={onSubmit} noValidate>
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