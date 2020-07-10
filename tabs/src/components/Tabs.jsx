import React from "react";

const textareaStyle = {
  marginTop: "30px",
};

const GroupButton = (props) => {
  let list = props.list;
  return (
    <div className="container-fluid">
      <div class="container btn-group" role="group" aria-label="Basic example">
        {list.map((button, i) => (
          <button
            key={i}
            className="btn btn-dark"
            onClick={(e) => props.handleButton(e)}
          >
            Tab{i + 1}
          </button>
        ))}
      </div>
      <div>
        {list.map((text, i) => (
          <textarea
            style={textareaStyle}
            key={i}
            cols="140"
            row={6}
            hidden={text.status}
            value={text.details}
            onChange={(e) => text.change(e.target.value)}
          ></textarea>
        ))}
      </div>
    </div>
  );
};
export default GroupButton;
