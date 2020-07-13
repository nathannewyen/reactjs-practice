import React, { useState, useEffect } from "react";
import axios from "axios";

const infoP = {
  fontWeight: "500",
};

const infoSpan = {
  fontWeight: "300",
};

const Info = (props) => {
  return (
    <div className="container">
      <h2>Luke</h2>
      <p style={infoP}>
        Height: <span style={infoSpan}>172 cm</span>
      </p>
      <p style={infoP}>
        Weight: <span style={infoSpan}>77 kg</span>
      </p>
      <p style={infoP}>
        Eye Color: <span style={infoSpan}>blue</span>
      </p>
      <p style={infoP}>
        Skin Color: <span style={infoSpan}>fair</span>
      </p>
    </div>
  );
};

export default Info;
