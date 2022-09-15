import React from "react";
import "./birthdayCard.css";

const BirthdayCard = (props) => {
  const { name, age, image } = props.birthday;

  return (
    <>
      <section className="card">
        <img src={image} />
        <span className="cardSpan">
          <h4>{name}</h4>
          <h6>{age} years old</h6>
        </span>
      </section>
    </>
  );
};

export default BirthdayCard;
