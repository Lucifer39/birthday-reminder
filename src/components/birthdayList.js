import React, { useState } from "react";
import data from "../data";
import BirthdayCard from "./birthdayCard";
import "./birthdayList.css";

const Birthdays = () => {
  const [birthdays, setBirthdays] = useState(data);
  const [counter, setCounter] = useState(data.length);

  const clear = () => {
    setBirthdays([]);
    setCounter(0);
  };
  return (
    <>
      <div className="container">
        <h1>{counter} Birthdays Today</h1>
        {birthdays.map((birthday) => {
          return (
            <div className="birthdayList">
              <BirthdayCard birthday={birthday} />
            </div>
          );
        })}

        <button className="btn" onClick={clear}>
          clear all
        </button>
      </div>
    </>
  );
};

export default Birthdays;
