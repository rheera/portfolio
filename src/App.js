import "./App.css";
import React, { useState } from "react";
import Tile from "./tile";
import { websites } from "./websites";

function App() {
  const [sites, setSites] = useState(websites);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio</h1>
      </header>
      <section className="section">
        <div className="container all-tiles">
          <div className="columns is-multiline">
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
