import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";

function Wardrobe() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          if (person.userId === 0) {
            return (
              <TinderCard
                key={person.name}
              >
                <div
                  style={{
                    backgroundImage: `url(${person.url})`,
                    overflowY: "scroll",
                    overflowWrap: "break-word",
                  }}
                  className="card"
                >
                  <h3>{person.name}</h3>
                  <div
                    style={{
                      position: `absolute`,
                      paddingBottom: `5%`,
                      bottom: `-60%`,
                    }}
                  >
                    <p className="row">
                      <h4 style={{ display: "inline-block" }}>Description:</h4>
                      <p style={{ display: "block" }}>{person.description}</p>
                    </p>
                    <p className="row">
                      <h4 style={{ display: "inline-block" }}>Brand:</h4>
                      <p style={{ display: "block" }}>{person.brand}</p>
                    </p>
                    <p className="row">
                      <h4 style={{ display: "inline-block" }}>Size:</h4>
                      <p style={{ display: "block" }}>{person.size}</p>
                    </p>
                    <p className="row">
                      <h4 style={{ display: "inline-block" }}>Condition:</h4>
                      <p style={{ display: "block" }}>{person.condition}</p>
                    </p>
                  </div>
                </div>
              </TinderCard>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Wardrobe;
