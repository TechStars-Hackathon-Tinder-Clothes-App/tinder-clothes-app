import React from "react";
import "./Wardrobe.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Wardrobe = ({ size, brand, condition, description }) => {
  return (
      <div className="wardrobe">
        <Avatar className="chat__image" src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
  );
};

export default Wardrobe;
