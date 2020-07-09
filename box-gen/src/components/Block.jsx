import React from "react";

const Block = (props) => {
  return (
    <div
      className="block border"
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
      }}
    >
      {props.children}
    </div>
  );
};

export default Block;
