import React,{useState} from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      n: name
    }
    props.handleUser((oldUsers) => [...oldUsers, newUser])
    setName("");
  }

  const handleNameErr = (e) => {
    setName(e.target.value);
    if (e.target.value >= 2) {
      setNameErr("Your Name is required")
    } else {
      setNameErr("")
    }
  }
  
  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Your Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={handleNameErr} />
            
            {nameErr ? (
              <p style={{ color: "red" }}>{nameErr}</p>
            ) : (
                ""
              )}

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
