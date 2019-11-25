import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './styles.css';
import Context from './Context';
import User from './User';
import Register from './Register'

import Landing from "./Landing"
import Child from "./Child"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }


  render() {
    const value = {
      toggleRegistration: this.toggleRegistration,
      showRegistration: this.state.showRegistration
    };

    return (
      <Context.Provider value={value}>
        <main id='app'>
          <Switch>
            <Landing
              exact
              path={'/'}
            />
            <Register
              exact
              path={'/register'}
            />
            <User
              exact
              path={'/user'}
            />
            <Child
              exact
              path={'/child'}
            />
          </Switch>
        </main>
      </Context.Provider>
    )
  }
}

export default App;
