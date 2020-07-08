import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import UserInfo from "./components/UserInfo";

const containerStyle = {
  marginTop: "30px",
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [users, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let person = { fname: firstName, lname: lastName };
    setUser((oldUsers) => [...oldUsers, person]);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="container clearfix" style={containerStyle}>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirst={setFirstName}
        handleLast={setLastName}
        addUser={handleSubmit}
      />
      {users.map((user, idx) => {
        return (
          <UserInfo firstName={user.fname} lastName={user.lname} key={idx} />
        );
      })}
    </div>
  );
}

export default App;
