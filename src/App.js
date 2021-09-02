  
// Repository:  medals-b-react
// Author:      Jeff Grissom
// Version:     2.xx
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
  render() { 
    return (
      <React.Fragment>
        { this.state.countries.map(country => 
          <Country key={ country.id } country={ country } />
        )}
      </React.Fragment>
    );
  }
}
 
export default App;
