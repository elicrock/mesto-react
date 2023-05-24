import React from "react";

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <button type="button" className="element__delete-btn"></button>
      <img src={card.link} alt={`${card.name} (фото)`} className="element__img" onClick={handleClick} />
      <div className="element__caption">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button type="button" className="element__like-btn"></button>
          <p className="element__likes-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;