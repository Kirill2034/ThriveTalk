import React from "react";

function Blocks(props) {
  const stl = {
    width: props.width,
    height: props.height,
    background: props.background,
    paddingTop: "30px",
    paddingLeft: "20px",
  };
  return (
    <div style={stl}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          borderTop: "1px solid #fff",
          width: 340,
        }}
      >
        <p
          style={{
            width: 9,
            height: 9,
            background: "#E9B730",
            borderRadius: "50%",
            marginRight: "15px",
          }}
        ></p>
        <p style={{ color: "#fff", fontSize: "32px", fontFamily: "Monserat" }}>
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default Blocks;
