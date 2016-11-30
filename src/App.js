import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameBoard: null
    };
  }

  componentWillMount() {
    if (this.state.gameBoard === null) {
      this.createGameBoard();
    }
  }

  createGameBoard() {
    const arr = [];
    //Initialize a 10x10 "multidimensional" array
    for (let i = 0; i < 10; i++) {
        arr[i] = [];
        for (let j = 0; j < 10; j++) {
            arr[i][j] = 0;
        }
    }
    this.setState({ gameBoard: arr });
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}
export default App;
