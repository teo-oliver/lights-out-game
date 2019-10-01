import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="flex">
          <div className="neon-teal-animated">Lights</div>
          <div className="neon-blue-animated">Out</div>
        </div>
        <div>
          <Link to="/board" className="start-game">
            Start Game
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
