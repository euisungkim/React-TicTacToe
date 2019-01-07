import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  // functional component
  // changed this.props to props both times it appears
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// React Component, renders 9 squares
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      // xIsNext will be flipped to determine which
      // player goes next and the game's state will be saved
      xIsNext: true
    };
  }

  handleClick(i) {
    // call .slice() to create a copy of the squares array
    // to modify instead of modifying existing array
    // Immutability is important!
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    // Each Square will now receive a value prop
    // that will either be 'X', 'O', or null for empty squares.
    return (
      <Square
        // passing two props value and onClick
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = "Next player: " + (this.state.xIsNext ? "X" : "O");

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// React Component, renders a board with placeholder values
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
