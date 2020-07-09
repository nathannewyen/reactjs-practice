import React, { useState } from "react";
const Form = (props) => {
  const [color, setColor] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    let newBlocks = {
      color: color,
      width: width + "px",
      height: height + "px",
    };
    props.handleBlock((a) => [...a, newBlocks]);
    setColor("");
    setWidth(0);
    setHeight(0);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="jumbotron d-flex flex-column"
    >
      <div className="form-group row">
        <label htmlFor="color"> Color: </label>
        <input
          type="text"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="form-group row">
        <label htmlFor="width"> Width: </label>
        <input
          type="text"
          name="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div className="form-group row">
        <label htmlFor="height"> Height: </label>
        <input
          type="text"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-dark">
        Generate
      </button>
    </form>
  );
};

export default Form;
