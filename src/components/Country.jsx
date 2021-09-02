import React, { Component } from 'react';
import Medal from './Medal';

class Country extends Component {
  render() { 
    const { country, medals, onIncrement, onDecrement } = this.props;
    return (
      <div className="country">
        <div className="name">
          { country.name }
        </div>
        { medals.map(medal =>
          <Medal 
            key={ medal.id } 
            country={ country } 
            medal={ medal } 
            onIncrement={ onIncrement } 
            onDecrement={ onDecrement } />
        ) }
        <hr />
      </div>
    );
  }
}

export default Country;
