import React from 'react'

export default function AppButton({handleClick, appText}) {
  return (
<button style={styles.buttonContainer} onClick={() => handleClick()}>{appText}</button>
  )
}

const styles = {
    buttonContainer: {
      backgroundColor: "green",
      width: "100%",
      height: "48px",
      justifyContent: "center",
      alignItems: "center",
      padding: "16px 32px",
      display: "flex",
      border: "green",
      color: "white",
      textTransform: "uppercase",
      marginTop: "20px",
      marginBottom: "20px",
      fontFamily: "raleway",
      fontWeight: "600",
      cursor: "pointer",
    },
  };