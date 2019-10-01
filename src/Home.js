import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="flex title">
          <div className="neon-teal-animated">Lights</div>
          <div className="neon-blue-animated">Out</div>
        </div>
        <NavLink to="/board" className="btn start-game">
          Start Game
        </NavLink>
      </div>
    );
  }
}

export default Home;
