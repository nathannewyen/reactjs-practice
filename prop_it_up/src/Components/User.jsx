import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <div className="card col-sm-6">
        <div className="card-body">
          <h2 className="card-title">
            {this.props.first_name}, {this.props.last_name}
          </h2>
          <p className="card-text">Age: {this.props.age}</p>
          <p className="card-text">Hair Color: {this.props.hairColor}</p>
        </div>
      </div>
    );
  }
}

export default User;
