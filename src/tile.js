import React, { useState } from "react";

const Tile = ({ id, name, url, pic, desc }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="column tile-block is-3-widescreen is-5-desktop is-5-tablet box mx-2">
      <a
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        href={url}
      >
        <div>
          <div className={"unhovered-tile"}>
            <h2 className="title">{name}</h2>
            <img className={"website-img"} src={pic} alt="website preview" />
          </div>
          {isHovered && (
            <div className="hovered-tile">
              <p>{desc}</p>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default Tile;
