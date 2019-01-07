import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/*
When a Square is clicked, the onClick function provided
by the Board is called. 
1. The onClick prop on the built-in DOM <button> component tells react to set up a click event listener.
2. When the button is clicked, React will call the onClick event handler that is defined in Square's render() method.
3. This event handler calls this.props.onClick(). The square's onClick prop was specified by the board.
4. Since the board passed onClick={() => this.handleClick(i)} to Square, the Square calls this.handleClick(i) when clicked.
*/
class Square extends React.Component {
  // Square no longer keeps track of the game's state
  // So removed constructor
  render() {
    return (
      // Fill the Square component with an “X” when we click
      <button
        className="square"
        // By calling this.setState from an onClick handler in the Square’s render method,
        // we tell React to re-render that Square whenever its <button> is clicked.
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

// React Component, renders 9 squares
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  handleClick(i) {
    // call .slice() to create a copy of the squares array
    // to modify instead of modifying existing array
    // Immutability is important!
    const squares = this.state.squares.slice();
    squares[i] = "X";
    this.setState({ squares: squares });
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
    const status = "Next player: X";

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
