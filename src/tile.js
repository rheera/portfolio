import React from "react";

const Tile = ({ id, name, url, pic, desc }) => {
  return (
    <div className="column is-4-desktop is-6 box">
      <a href={url}>
        <div className="tile is-child">
          <h2 className="title">{name}</h2>
          <img className={"website-img"} src={pic} alt="website preview" />
          <p>{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default Tile;
