import React, { Component } from 'react';
import { render } from 'react-dom';
import CountryDropdown from '../Section/CountryDropdown';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      value: true
    };
  }

  render() {
    return (
      <div>
       <CountryDropdown/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
