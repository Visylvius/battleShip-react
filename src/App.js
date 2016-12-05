import React from 'react';
import ShipSelect from './Ship-Select';
import GameBoard from './GameBoard';
/**
 * A counter button: tap the button to increase the count.
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameBoard: null,
      count: 1,
      currentlySelectingShip: false,
      finishedShipSelection: false,
      player1SelectedShips: [],
      currentlySelectedShipLength: null
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
            arr[i][j] = {
                          coordinateX: i,
                          coordinateY: j,
                          containsShip: false,
                          alreadyAttacked: false
                        };
        }
    }
    console.log('this before gameBoard creation', this);
    this.setState({ gameBoard: arr });
  }

  onInputChange(event) {
    console.log('event', event);
  }

  initialShipPlacement(event) {
    event.preventDefault();
    let currentlySelectedShipArray = [];
    currentlySelectedShipArray.push(Number(event.target.ship.value));
    console.log(currentlySelectedShipArray);
    // console.log('event.target', typeof Number(event.target.ship.value));
    this.setState({
      currentlySelectingShip: true,
      currentlySelectedShipLength: Number(event.target.ship.value),
      player1SelectedShips: this.state.player1SelectedShips.concat(currentlySelectedShipArray)
    }, () => {
      console.log('this.state', this.state);
    });
    // console.log('this.state', this.state);
  }

  render() {
    return (
      <div
        className='main-container'
      >
      {this.state.currentlySelectingShip !== true
        ? <ShipSelect
            playerSelectsShip={this.initialShipPlacement.bind(this)}
          />
        : <GameBoard
            gameBoard={this.state.gameBoard}
          />
      }
      </div>

    );
  }
}
export default App;
