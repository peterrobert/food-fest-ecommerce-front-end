import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import logo from "../images/logo.jpg";

export default function AppNavigation({ categories }) {
  const { cartData } = useContext(CartContext);
  let navigate = useNavigate();

  // <==== Navigate to Cart page ====>
  const navigateToCartPage = () => {
    navigate(`/cart`);
  };

  // <=== map the categories and display them on the nav item ===>
  const displayCategories = () => {
    const results = categories.map((value) => {
      return (
        <li className="nav-item nav-link" style={Styles.navLink} key={value.id}>
          {value.name}
        </li>
      );
    });
    return results;
  };

  // <=== Return the nav bar ===>
  return (
    <div className="navigation-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <div className="navbar-brand">
          <img src={logo} alt="Store fest" style={Styles.logo} />
        </div>
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
          <div className="navbar-nav" style={Styles.navItemsContainer}>
            {displayCategories()}
          </div>
        </div>

        <div style={Styles.cartContainer}>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => navigateToCartPage()}
          >
            <i
              className="fa fa-shopping-basket"
              aria-hidden="true"
              style={Styles.busketIcon}
            ></i>{" "}
            <span className="badge badge-light" style={Styles.badgeIcon}>
              {cartData.length}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

const Styles = {
  logo: {
    height: "60px",
    borderRadius: "15px",
  },

  navItemsContainer: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  navLink: {
    cursor: "pointer",
    textTransform: "UpperCase",
  },
  backButton: {
    textTransform: "uppercase",
    marginLeft: "50px",
  },
  cartContainer: {
    marginRight: "50px",
  },
  busketIcon: {
    fontSize: "25px",
  },
  badgeIcon: {
    fontSize: "16px",
  },
};
