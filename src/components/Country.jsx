import React, { Component } from 'react';

class Country extends Component {
  state = {
    name: this.props.country.name,
    gold: this.props.country.gold,
  }
  handleIncrement = () => this.setState({ gold: this.state.gold + 1 });
  handleDecrement = () => this.setState({ gold: this.state.gold - 1 });
  render() { 
    return (
      <div className="country">
        <div className="name">
          { this.state.name }
        </div>
        <div className="medals">
          gold medals: { this.state.gold }
          <button onClick={ this.handleIncrement }>+</button>
          <button disabled={ this.state.gold === 0 } onClick={ this.handleDecrement }>-</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default Country;
