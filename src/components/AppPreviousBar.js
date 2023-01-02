import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export default function AppPreviousBar({ handlePrevious }) {
  const { cartData } = useContext(CartContext);

  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <div
          className="navbar-brand previous-button"
          onClick={handlePrevious}
          style={styles.backButton}
        >
          Home
        </div>
        <div style={styles.cartContainer}>
          <button type="button" className="btn btn-success">
            <i
              className="fa fa-shopping-basket"
              aria-hidden="true"
              style={styles.busketIcon}
            ></i>{" "}
            <span className="badge badge-light" style={styles.badgeIcon}>
              {cartData.length}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

const styles = {
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
