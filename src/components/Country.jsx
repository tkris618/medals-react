import React, { Component } from 'react';

class Country extends Component {
  state = {
    name: 'United States',
    gold: 0,
  }
  render() { 
    return (
      <div className="country">
        <div className="name">
          { this.state.name }
        </div>
        <div className="medals">
          gold medals: { this.state.gold }
          <button>+</button>
        </div>
      </div>
    );
  }
}

export default Country;
