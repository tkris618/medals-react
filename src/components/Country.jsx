import React, { Component } from 'react';

class Country extends Component {
  render() { 
    const { country, onIncrement, onDecrement } = this.props;
    return (
      <div className="country">
        <div className="name">
          { country.name }
        </div>
        <div className="medals">
          gold medals: { country.gold }
          <button onClick={ () => onIncrement(country.id) }>
            +
          </button>
          <button disabled={ country.gold === 0 } onClick={ () => onDecrement(country.id) }>
            -
          </button>
        </div>
        <hr />
      </div>
    );
  }
}

export default Country;
