  
// Repository:  medals-b-react
// Author:      Jeff Grissom
// Version:     3.xx
import React, { Component } from 'react';
import Country from './components/Country';
import './App.css';

class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2 },
      { id: 2, name: 'China', gold: 3 },
      { id: 3, name: 'Germany', gold: 0 },
    ],
    medals: [
      { id: 1, name: 'gold' },
    ]
  }
  handleIncrement = (countryId, medalName) => {
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx][medalName] += 1;
    this.setState({ countries: countries });
  }
  handleDecrement = (countryId, medalName) => {
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx][medalName] -= 1;
    this.setState({ countries: countries });
  }
  render() { 
    return (
      <React.Fragment>
        { this.state.countries.map(country => 
          <Country 
            key={ country.id } 
            country={ country } 
            medals={ this.state.medals }
            onIncrement={ this.handleIncrement } 
            onDecrement={ this.handleDecrement } />
        )}
      </React.Fragment>
    );
  }
}
 
export default App;
