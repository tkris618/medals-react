import React, { Component } from 'react';

class Country extends Component {
  render() { 
    return (
      <div className="country">
        <div className="name">
          { this.props.country.name }
        </div>
        <div className="medals">
          gold medals: { this.props.country.gold }
          <button onClick={ () => this.props.onIncrement(this.props.country.id) }>
            +
          </button>
          <button disabled={ this.props.country.gold === 0 } onClick={ () => this.props.onDecrement(this.props.country.id) }>
            -
          </button>
        </div>
        <hr />
      </div>
    );
  }
}

export default Country;
