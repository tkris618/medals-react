import React, { Component } from 'react';

class NewCountry extends Component {
  state = {  }
  handleClick = (e) => {
    e.preventDefault();
    console.log('add country');
  }
  render() { 
    return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={ this.handleClick }>New Country</button>
      </div>
    );
  }
}

export default NewCountry;
