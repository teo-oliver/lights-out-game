import React, { Component } from 'react';
import Board from './Board';
import Home from './Home';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="App">
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="fade"
                timeout={1000}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <div className="page">
                        <Home />
                      </div>
                    )}
                  />

                  <Route
                    exact
                    path="/board"
                    render={() => (
                      <div className="page">
                        <Board />
                      </div>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      />
    );
  }
}

export default App;
