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
      <ul class="nav justify-content-center">{displayCategories()}</ul>
    </div>
  );
}
