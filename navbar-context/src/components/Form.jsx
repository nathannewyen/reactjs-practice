import React from "react";

const Form = (props) => {
  return (
    <div className="container">
      <form>
        <div className="form-group row">
          <label htmlFor="name" class="col-sm-2 col-form-label">
            Your Name:
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
