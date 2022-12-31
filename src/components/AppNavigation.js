import React from "react";

export default function AppNavigation({ categories }) {
  // <=== map the categories and display them on the nav item ===>
  const displayCategories = () => {
    const results = categories.map((value) => {
      return <li className="nav-item">{value.name}</li>;
    });
    return results;
  };

  // <=== Return the nav bar ===>
  return (
    <div className="navigation-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">StoreFest</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">{displayCategories()}</div>
        </div>
      </nav>
    </div>
  );
}
