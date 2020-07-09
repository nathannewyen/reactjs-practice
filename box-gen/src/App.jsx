import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Block from "./components/Block";

// Style
const styleContainer = {
  marginTop: "20px",
};

function App() {
  const [blocks, setBlocks] = useState([]);

  return (
    <div className="container" style={styleContainer}>
      <Form handleBlock={setBlocks}></Form>
      <div className="container d-flex flex-wrap">
        {blocks.map((cube, i) => {
          return (
            <Block
              key={i}
              color={cube.color}
              width={cube.width}
              height={cube.height}
            ></Block>
          );
        })}
      </div>
    </div>
  );
}

export default App;
