import React from "react";
import "./styles.css";
import { useState } from "react";

const placesDB = {
  Himanchal: [
    { name: "Shimla", rating: "4/5" },
    { name: "Manali", rating: "4/5" },
    { name: "Prashar Lake", rating: "3.5/5" }
  ],

  Rajasthan: [
    {
      name: "Udaipur",
      rating: "4/5"
    },
    {
      name: "Jaipur",
      rating: "3/5"
    },
    {
      name: "Jaisalmer",
      rating: "5/5"
    }
  ],
  Kerela: [
    {
      name: "Munnar",
      rating: "4/5"
    },
    {
      name: "Alleppey",
      rating: "5/5"
    }
  ]
};

var arrayDB = Object.keys(placesDB);

export default function App() {
  const [selectedPlace, setPlace] = useState("Kerela");
  function onClickhandler(state) {
    setPlace(state);
  }
  return (
    <div className="App">
      <h1> ⭐ Tourist Places In India ⭐ </h1>
      <p>
        Checkout my favorite places to visit in India. Select a <em>state</em>{" "}
        to get started{" "}
      </p>

      <div>
        {arrayDB.map(function (state) {
          return (
            <button
              style={{
                cursor: "pointer",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}
              onClick={() => onClickhandler(state)}
            >
              {state}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul>
          {placesDB[selectedPlace].map(function (city) {
            return (
              <bold>
                <li
                  style={{
                    listStyle: "none",
                    padding: "1rem",
                    border: "1px solid #D1D5DB"
                  }}
                >
                  <div style={{ fontSize: "larger" }}> {city.name} </div>
                  <div style={{ fontSize: "smaller" }}> {city.rating} </div>
                </li>
              </bold>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
