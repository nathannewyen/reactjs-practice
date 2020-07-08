import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import UserInfo from "./components/UserInfo";

const containerStyle = {
  marginTop: "30px",
};

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="container clearfix" style={containerStyle}>
      <Form handleUser={setUsers} />
      {users.map((user, idx) => {
        return (
          <UserInfo
            firstName={user.fname}
            lastName={user.lname}
            email={user.email}
            password={user.pw}
            confirmPassword={user.confirmpw}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default App;
