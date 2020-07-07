import React, { Component } from "react";

// eslint-disable-next-line
const ranks = [
  "Serf",
  "Yeoman",
  "Knights",
  "Barons",
  "Earl",
  "Count",
  "Duke",
  "Emperor",
];

class Fox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRank: this.props.rank,
    };
  }

  levelUp = () => {
    if (this.state.currentRank === ranks.length - 1) {
      return;
    }
    this.setState({ currentRank: this.state.currentRank + 1 });
  };

  render() {
    return (
      <div className="card col-sm-6">
        <div className="card-body">
          <h2 className="card-title">{this.props.name}</h2>
          <p className="card-text">
            Royal Title: {ranks[this.state.currentRank]}
          </p>
          <p className="card-text">Fur Color: {this.props.furColor}</p>
          <button className="btn btn-primary" onClick={this.levelUp}>
            Rank up
          </button>
        </div>
      </div>
    );
  }
}

export default Fox;
