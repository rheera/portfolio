import React from "react";

const Tile = ({ id, name, url, pic, desc }) => {
  return (
    <div className="tile is-parent is-3">
      <div className="tile is-child">
        <h2 className="title">{name}</h2>
        <img className={"website-img"} src={pic} alt="website preview" />
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Tile;
