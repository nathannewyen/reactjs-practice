import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./Components/User";
// eslint-disable-next-line

function App() {
  return (
    <div className="container">
      <User first_name="Doe" last_name="Jane" age={45} hairColor="Black" />
      <User first_name="Smith" last_name="John" age={88} hairColor="Brown" />
      <User
        first_name="Fillmore"
        last_name="Millard"
        age={50}
        hairColor="Brown"
      />
      <User first_name="Smith" last_name="Maria" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;
