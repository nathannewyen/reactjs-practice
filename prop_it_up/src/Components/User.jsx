import React, { Component } from "react";

const cardStyle = {
  padding: "20px",
  display: "inline-block",
  margin: "10px",
};

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAge: this.props.age,
    };
  }

  happyBirthday = () => {
    this.setState({ currentAge: this.state.currentAge + 1 });
  };

  render() {
    return (
      <div className="card col-sm-4" style={cardStyle}>
        <div className="card-body">
          <h2 className="card-title">
            {this.props.first_name}, {this.props.last_name}
          </h2>
          <p className="card-text">Age: {this.state.currentAge}</p>
          <p className="card-text">Hair Color: {this.props.hairColor}</p>
          <button className="btn btn-primary" onClick={this.happyBirthday}>
            Happy Birthday
          </button>
        </div>
      </div>
    );
  }
}

export default User;
