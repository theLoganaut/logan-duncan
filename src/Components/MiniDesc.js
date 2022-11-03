import React, { useState } from "react";

const MiniDesc = ({ hover }) => {
  return (
    <div
      style={{
        marginTop: ".5rem",
        textAlign: "center",
        maxWidth: "400px",
        minHeight: "100px",
        marginLeft: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {hover}
    </div>
  );
};

export default MiniDesc;
