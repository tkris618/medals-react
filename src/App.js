  
// Repository:  medals-b-react
// Author:      Jeff Grissom
// Version:     2.xx
import React, { Component } from 'react';
import Country from './components/Country';
import './App.css';

class App extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <Country />
        <Country />
        <Country />
      </React.Fragment>
    );
  }
}
 
export default App;
