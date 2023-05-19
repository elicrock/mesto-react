function Card(props) {
  // console.log(props);
  return (
    <li className="element">
      <button type="button" className="element__delete-btn"></button>
      <img src={props.link} alt="" className="element__img" />
      <div className="element__caption">
        <h2 className="element__title">{props.name}</h2>
        <div className="element__like">
          <button type="button" className="element__like-btn"></button>
          <p className="element__likes-counter"></p>
        </div>
      </div>
    </li>
  );
}

export default Card;