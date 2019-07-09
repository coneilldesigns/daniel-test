import React from "react";
import profPic from "./prof-pic.jpg";

const UserDataCard = (props) => {
  return (
    <div className="card">
      <img src={profPic} alt="John" />
      <div className="card-body">
        <h1>{props.userdata.name}</h1>
        <p className="title">{props.userdata.job}</p>
        <p>{props.userdata.address}</p>
        <p>{props.userdata.phone_number}</p>
        <button className="btn-primary">Contact</button>
      </div>
    </div>
  );
};

export default UserDataCard;
