function ImagePopup() {
  return (
    <div className="popup popup_type_view-image">
      <div className="popup__container-image">
        <button className="popup__close-button" type="button"></button>
        <img src="#" alt="#" className="popup__img" />
        <h2 className="popup__title-img"> </h2>
      </div>
    </div>
  );
}

export default ImagePopup;