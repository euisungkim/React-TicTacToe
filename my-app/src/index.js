import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React Component, renders a single <button>
class Square extends React.Component {
  // React components can have state by setting this.state
  // in their constructors.
  constructor(props) {
    // In JS classes,
    // you need to always call super when defining the constructor of a subclass.
    // All React component classes that have a constructor should start it with a super(props) call.
    super(props);
    this.state = {
      value:null,
    };
  }

  render() {
    return (
      // onClick test
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}

// React Component, renders 9 squares
class Board extends React.Component {
  renderSquare(i) {
    // passing a prob called value to the Square
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

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

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

