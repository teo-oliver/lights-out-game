import React, { Component } from 'react';
import Board from './Board';
import Home from './Home';
import './App.css';
import { Route, Switch } from 'react-router-dom';
/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/board" component={Board} />
        </Switch>
      </div>
    );
  }
}

export default App;
