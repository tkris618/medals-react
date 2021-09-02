  
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
    ]
  }
  handleIncrement = (countryId) => {
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx].gold += 1;
    this.setState({ countries: countries });
  }
  handleDecrement = (countryId) => {
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);
    countries[idx].gold -= 1;
    this.setState({ countries: countries });
  }
  render() { 
    return (
      <React.Fragment>
        { this.state.countries.map(country => 
          <Country 
            key={ country.id } 
            country={ country } 
            onIncrement={ this.handleIncrement } 
            onDecrement={ this.handleDecrement } />
        )}
      </React.Fragment>
    );
  }
}
 
export default App;
