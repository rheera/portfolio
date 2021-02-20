import "./App.css";
import React, { useState } from "react";
import Tile from "./tile";
import Filter from "./filter";
import { websites } from "./websites";

function App() {
  const [sites, setSites] = useState(websites);
  const filterSites = (filter) => {
    setSites(websites.filter((site) => site.tags.includes(filter)));
  };
  return (
    <div className="App">
      <header className={"mb-4"}>
        <h1 className={"title-text title has-text-centered"}>Portfolio</h1>
      </header>
      <Filter sites={websites} filterSites={filterSites} />
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
