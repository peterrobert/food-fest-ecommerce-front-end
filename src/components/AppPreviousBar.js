import React from "react";

export default function AppPreviousBar({ handlePrevious }) {
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
              9
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
