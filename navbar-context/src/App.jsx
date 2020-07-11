import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
      {users.map((user, i) => {
        return (
          <Navbar
            name={user.n}
            key = {i}
          />
        )
      })}
        </nav>
      <Form handleUser={setUsers}/>
    </div>
  );
}

export default App;
