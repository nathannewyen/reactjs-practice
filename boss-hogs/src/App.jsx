import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [numbEmployees, setNumbEmployees] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [hogs, setHogs] = useState([]);
  const [nameVal, setNameVal] = useState("");
  const [colorVal, setColorVal] = useState("");
  const [numbEmployeesVal, setNumbEmployeesVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let hogs = {
      name: name,
      color: color,
      numbEmployees: numbEmployees,
      imgUrl: imgUrl,
    };

    setHogs((oldHogs) => [...oldHogs, hogs]);
    setName("");
    setColor("");
    setNumbEmployees(0);
    setImgUrl("");
  };

  const handleName = (e) => {
    setName(e.target.value);
    if (e.target.value.length <= 2) {
      setNameVal("Name must be at least 3 characters");
    } else {
      setNameVal("");
    }
  };

  const handleColor = (e) => {
    setColor(e.target.value);
    if (e.target.value.length <= 2) {
      setColorVal("Color must be at least 3 characters");
    } else {
      setColorVal("");
    }
  };

  const handleNum = (e) => {
    setNumbEmployees(e.target.value);
    if (e.target.value.length < 0) {
      setNumbEmployeesVal("Can't have negative employees");
    } else {
      setNumbEmployeesVal("");
    }
  };

  return (
    <div className="App">
      <div className="row justify-content-around">
        <form action="" className="col-5" onSubmit={(e) => handleSubmit(e)}>
          <h2> Add Boss Hogs: </h2>
          <div className="form-group">
            <label htmlFor="name"> Name: </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => handleName(e)}
            />
            <span className="text-danger">{nameVal}</span>
          </div>
          <div className="form-group">
            <label htmlFor="name"> Color: </label>
            <input
              type="text"
              className="form-control"
              name="color"
              value={color}
              onChange={(e) => handleColor(e)}
            />
            <span className="text-danger">{colorVal}</span>
          </div>
          <div className="form-group">
            <label htmlFor="name"> Numb Employees: </label>
            <input
              type="number"
              className="form-control"
              name="numbEmployees"
              value={numbEmployees}
              onChange={(e) => handleNum(e)}
            />
            <span className="text-danger">{numbEmployeesVal}</span>
          </div>
          <div className="form-group">
            <label htmlFor="imgUrl"> Img Url: </label>
            <input
              type="url"
              className="form-control"
              name="imgUrl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          {name.length > 2 && color.length > 2 && numbEmployees >= 0 ? (
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          ) : (
            <button type="submit" className="btn btn-primary" disabled>
              Add
            </button>
          )}
        </form>
        {/* Display */}
        <div className="col-5">
          {hogs.map((hog, idx) => {
            return (
              <div className="card" key={idx}>
                <img src={hog.imgUrl} alt={hog.name} className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title"> {hog.name} </h3>
                  <p className="card-text"> {hog.numbEmployees} </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
