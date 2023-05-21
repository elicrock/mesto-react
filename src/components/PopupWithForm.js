function PopupWithForm({ title, name, btnText, children, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} >
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" name={name} noValidate>
          <div className="popup__inputs">
            {children}
          </div>
          <button className="popup__save-button" type="submit">{btnText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;