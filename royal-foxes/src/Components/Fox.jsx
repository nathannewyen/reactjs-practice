import React, { Component } from 'react'

class Fox extends Component {
  render() {
      return (
        <div className="card col-sm-6">
          <div className="card-body">
            <h2 className="card-title">
              {this.props.name}
            </h2>
              <p className="card-text">
                Royal Title: { this.props.title }
              </p>
              <p className="card-text">
                Fur Color: {this.props.furColor}
            </p>
            <button className="btn btn-primary">
              Rank up
            </button>
          </div>
        </div>
      )
  }
}

export default Fox;