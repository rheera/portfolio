import React from "react";

const Tile = ({ id, name, url, pic, desc }) => {
  return (
    <div className="column is-4-desktop">
      <h2 className="title">{name}</h2>
      <img src={pic} alt="website preview" />
      <p>{desc}</p>
    </div>
  );
};

export default Tile;
