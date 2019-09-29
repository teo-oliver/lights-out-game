import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';
import { Howl, Howler } from 'howler';
import mus from './audio/mus/lights_out_mus_v1.mp3';
import soundFx from './audio/fx/fx.mp3';

const music = new Howl({
  src: [mus]
});

//Setup holwer audio sprite
const fx = new Howl({
  src: [soundFx],
  sprite: {
    fx_01: [0, 2351.814058956916],
    fx_02: [4000, 2473.083900226758],
    fx_03: [8000, 2184.1269841269836],
    fx_04: [12000, 2350.385487528344],
    fx_05: [16000, 2231.1564625850338],
    fx_06: [20000, 2345.192743764173],
    fx_07: [24000, 2149.7278911564626]
  }
});

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  };
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightStartsOn);
      }
      board.push(row);
    }

    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split('-').map(Number); //.map(Number)?

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    //Flip cells
    flipCell(y, x); //Flip inital cell
    flipCell(y, x - 1); // flip left
    flipCell(y, x + 1); // flip right
    flipCell(y - 1, x); // flip below
    flipCell(y + 1, x); // flip above

    //Get Random Sound Effects
    function getRandomFx() {
      const fxArray = [
        'fx_01',
        'fx_02',
        'fx_03',
        'fx_04',
        'fx_05',
        'fx_06',
        'fx_07'
      ];

      var randomFx = fxArray[Math.floor(Math.random() * fxArray.length)];
      return randomFx;
    }

    fx.play(getRandomFx());

    // win when every cell is turned off
    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({ board, hasWon });
  }

  /** Render game board or winning message. */

  render() {
    // Win message
    // music.play();
    if (this.state.hasWon) {
      return (
        <div className="Board-title">
          <div className="winner">
            <span className="neon-orange">You</span>
            <span className="neon-blue">WIN</span>
          </div>
        </div>
      );
    }

    let tblBoard = [];
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }

    return (
      <div>
        <div className="Board-title">
          <div className="container">
            <div className="neon-orange">Lights</div>
            <div className="neon-blue">Out</div>
          </div>
        </div>
        <div className="">
          <table className="Board">
            <tbody>{tblBoard}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Board;
