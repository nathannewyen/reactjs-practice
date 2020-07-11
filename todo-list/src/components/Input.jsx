import React from "react";

const inputStyle = {
  marginTop: "30px",
};

const Input = (props) => {
  return (
    <div
      className="container"
      style={inputStyle}
      onSubmit={(e) => props.handleSubmit(e)}
    >
      <form>
        <div className="form-group row">
          <label htmlFor="add-task" className="col-sm-2 col-form-label">
            Add a task:
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              value={props.valueInput}
              onChange={(e) => props.handleInput(e.target.value)}
            />
          </div>
          <button className="btn btn-primary col-1" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
