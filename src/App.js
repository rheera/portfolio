import "./App.css";
import React, { useState } from "react";
import Tile from "./tile";
import { websites } from "./websites";

function App() {
  const [sites, setSites] = useState(websites);
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <div className="columns is-multiline all-tiles is-centered has-text-centered">
            {sites.map((site) => {
              return <Tile key={site.id} {...site} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
