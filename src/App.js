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
      player1SelectedShips:
      [
        { shipName: 'Destroyer', shipLength: 2 },
        { shipName: 'Submarine', shipLength: 3 },
        { shipName: 'Cruiser', shipLength: 3 },
        { shipName: 'Battleship', shipLength: 4 },
        { shipName: 'Carrier', shipLength: 5 }
      ],
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

  initialShipPlacement(shipName, shipLength) {
    console.log('shipName', shipName, 'shiplength', shipLength);
    // console.log('event.target', typeof Number(event.target.ship.value));
    this.setState({
      currentlySelectingShip: true,
      currentlySelectedShipLength: shipLength
    }, () => {
      console.log('this.state', this.state);
    });
  }

  render() {
    return (
      <div
        className='main-container'
      >
      {this.state.currentlySelectingShip !== true
        ? <ShipSelect
            playerSelectsShip={this.initialShipPlacement.bind(this)}
            currentlySelectedShips={this.state.player1SelectedShips}
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
