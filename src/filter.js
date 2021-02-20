import React from "react";

const Filter = ({ sites, filterSites }) => {
  return (
    <section className="categories">
      <div className="columns is-centered">
        <div className="column">
          <div className="buttons is-centered">
            <button className="button" onClick={() => filterSites("HTML")}>
              All
            </button>
            <button className="button" onClick={() => filterSites("Bootstrap")}>
              Bootstrap
            </button>
            <button className="button" onClick={() => filterSites("Bulma")}>
              Bulma
            </button>
            <button
              className="button"
              onClick={() => filterSites("JavaScript")}
            >
              JavaScript
            </button>
            <button className="button" onClick={() => filterSites("React")}>
              React
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
