import React, { Component } from 'react';
import Board from './Board';
import Home from './Home';
import Page from './Page';
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
                classNames="page"
                timeout={1000}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Page>
                        <Home />
                      </Page>
                    )}
                  />

                  <Route
                    exact
                    path="/board"
                    render={() => (
                      <Page>
                        <Board />
                      </Page>
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
