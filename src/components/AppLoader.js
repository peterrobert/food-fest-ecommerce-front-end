import React from "react";
// <=== material ui ===>

export default function AppLoader({ status }) {
  return (
    <div style={LoaderStyles.screenPosition}>
      <div className="loader-container" style={LoaderStyles.loaderContainer}>
        <div
          className="spinner-border"
          role="status"
          style={LoaderStyles.spinner}
        >
          <span className="sr-only"></span>
        </div>
        <br />
      </div>
      <br />
      <h1 style={LoaderStyles.loaderContainer}> {status}...</h1>
    </div>
  );
}

// <=== Component styles ===>

const LoaderStyles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    height: "100px",
    width: "100px",
  },
  screenPosition: {
    top: "40Vh",
    position: "relative",
  },
};