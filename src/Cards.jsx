import React from "react";

const Cards = ({ img, title, lyrics, description }) => {
  return (
    <div className="container">
      <div className="cardsDiv">
        <img src={img} alt={title} />
        <div className="textDiv">
          <h2> {title} </h2>
          <p> {lyrics} </p>
          <p> {description} </p>
          <button className="detailsButton">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
