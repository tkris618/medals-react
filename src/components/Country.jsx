import React, { Component } from 'react';

class Country extends Component {
  state = {  }
  render() { 
    return (
      <div className="country">
        <div className="name">
          United States
        </div>
        <div className="medals">
          gold medals: 0
          <button>+</button>
        </div>
      </div>
    );
  }
}

export default Country;
