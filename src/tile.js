import React from "react";

const Tile = ({ id, name, url, pic, desc }) => {
  return (
    <div className="column tile-block is-3-widescreen is-5-desktop is-5-tablet box mx-2">
      <a href={url}>
        <div className={"tile-container"}>
          <div className={"unhovered-tile"}>
            <h2 className="title">{name}</h2>
            <img className={"website-img"} src={pic} alt="website preview" />
          </div>
          <div className="hovered-tile content is-small">
            <p className={"tile-desc"}>{desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Tile;
