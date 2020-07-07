import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fox from './Components/Fox'

function App() {
  return (
        <div className="container">
          <div className="jumbotron">
            <h1>Hello world</h1>
          </div>
          <div className="row">
            <Fox
              name="Mr. Fox"
              title="Knight"
              furColor="red"
            />
            <Fox
              name="Mr. Nhan"
              title="Queen"
              furColor="green"
            />
            <Fox
              name="Mr. Nick"
              title="Yikes"
              furColor="blue"
            />
            <Fox
              name="Mr. Dav"
              title="Lol"
              furColor="purple"
              />
          </div>
        </div>
  );
}

export default App;
