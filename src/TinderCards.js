import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";

function TinderCards(props) {
  const [people, setPeople] = useState([]);

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
    if (direction === "right") {
      props.handleOpenModal();
    }
  }

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
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={onSwipe}
          >
            <div
              style={{ backgroundImage: `url(${person.url})`, overflowY: "scroll", overflowWrap: "break-word" }}
              className="card"
            >
              <h3>{person.name}</h3>
              <div style={{position: `absolute`, paddingBottom: `5%`, opacity: "0.9", bottom: `-60%`, backgroundColor: "grey", borderRadius: "4px", padding: "5px", marginBottom: "3%"}}>
                <p className="row">
                <h4 style={{display: "inline-block"}}>
                  Description:
                </h4>
                  <p style={{display: "block"}}>
                  {person.description}
                  </p>
                </p>
                <p className="row">
                <h4 style={{display: "inline-block"}}>
                  Brand:
                </h4>
                  <p style={{display: "block"}}>
                  {person.brand}
                  </p>
                </p>
                <p className="row">
                <h4 style={{display: "inline-block"}}>
                  Size:
                </h4>
                  <p style={{display: "block"}}>
                  {person.size}
                  </p>
                </p>
                <p className="row">
                <h4 style={{display: "inline-block"}}>
                  Condition:
                </h4>
                  <p style={{display: "block"}}>
                  {person.condition}
                  </p>
                </p>
                
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
