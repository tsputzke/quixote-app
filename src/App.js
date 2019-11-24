import React, { Component } from 'react';
import './styles.css';
import Context from './Context';
import User from './User';

import Landing from "./Landing"
import Child from "./Child"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showRegistration: false }
  }

  toggleRegistration = () => {
    this.setState({
      showRegistration: !this.state.showRegistration
    });
  }

  render() {
    const value = {
      toggleRegistration: this.toggleRegistration,
      showRegistration: this.state.showRegistration
    };

    return (
      <Context.Provider value={value}>
        <div id='app'>
          <User/>
          {/* <Landing/> */}
          {/* <Child/> */}
        </div>
      </Context.Provider>
    )
  }
}

export default App;
