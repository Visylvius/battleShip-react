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
      flag: false,
      player1SelectedShips:
      [
        { shipName: 'Destroyer', shipLength: 2 },
        { shipName: 'Submarine', shipLength: 3 },
        { shipName: 'Cruiser', shipLength: 3 },
        { shipName: 'Battleship', shipLength: 4 },
        { shipName: 'Carrier', shipLength: 5 }
      ],
      currentlySelectedShipLength: null,
      currentlySelectedShipRemainingLength: null,
      player1lastShipPlacementCoordinates: { xCoord: null, yCoord: null },
      player1PlacementGrid: {
        highestXCoordinate: null,
        lowestXCoordinate: null,
        highestYCoordinate: null,
        lowestYCoordinate: null
      }
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

  initialShipPlacement(shipName, shipLength) {
    console.log('shipName', shipName, 'shiplength', shipLength);
    this.setState({
      currentlySelectingShip: true,
      currentlySelectedShipRemainingLength: shipLength,
      currentlySelectedShipLength: shipLength,
    }, () => {
      console.log('this.state after initialShipPlacement', this.state);
    });
    // console.log('filter array', this.state.player1SelectedShips.filter(values => {
    //   console.log('values', values);
    //   return values.shipName !== shipName;
    // }));
  }

  userShipPlacement(userSubmittedTile) {
    console.log('this.state first call', this.state.currentlySelectedShipRemainingLength, this.state);
    console.log(this.state.currentlySelectedShipLength, this.state.currentlySelectedShipRemainingLength);
    let shipLengthComparison = this.state.currentlySelectedShipLength === this.state.currentlySelectedShipRemainingLength;
    console.log('shipLengthComparison', shipLengthComparison);
    if (shipLengthComparison && userSubmittedTile.containsShip === false) {
      // Object.assign({}, userSubmittedTile, { containsShip: true });
      userSubmittedTile.containsShip = true;
      // let newRemainingShipLength = this.state.currentlySelectedShipRemainingLength--;
      console.log('ship length', this.state.currentlySelectedShipRemainingLength--);
      this.setState({
        currentlySelectedShipRemainingLength: this.state.currentlySelectedShipRemainingLength--,
        player1lastShipPlacementCoordinates: {
          xCoord: userSubmittedTile.coordinateX,
          yCoord: userSubmittedTile.coordinateY
        },
        player1PlacementGrid: {
          highestXCoordinate: userSubmittedTile.coordinateX,
          lowestXCoordinate: userSubmittedTile.coordinateX,
          lowestYCoordinate: userSubmittedTile.coordinateY,
          highestYCoordinate: userSubmittedTile.coordinateY,
        }
      }, () => {
        console.log('currentState after shipPlacement', this.state);
      });
    } else if (userSubmittedTile.containsShip === false) {
      console.log('line 96');
      if (this.checkForProperShipPlacement(userSubmittedTile.coordinateX, userSubmittedTile.coordinateY)) {
        console.log('it worked, and its working for 6,6');

      }
    } else {
      userSubmittedTile.containsShip = false;
    }
  }

  checkForProperShipPlacement(userSubmittedXCoordinate, userSubmittedYCoordinate) {
    let currentLength = this.state.currentlySelectedShipRemainingLength;
    let lowestXCoordinate = this.state.player1PlacementGrid.lowestXCoordinate;
    let highestXCoordinate = this.state.player1PlacementGrid.highestXCoordinate;
    let highestYCoordinate = this.state.player1PlacementGrid.highestYCoordinate;
    let lowestYCoordinate = this.state.player1PlacementGrid.lowestYCoordinate;
    let xPointsArr = [];
    let yPointsArr = [];
    let sharedPointsArr = [];
    if (currentLength === 4) {
      console.log('yo');
      if (highestYCoordinate + currentLength > 9 && highestXCoordinate + currentLength > 9) {
        //this is only for one point which is 6,6.
        console.log('yCoord', lowestYCoordinate, 'xCoor', lowestXCoordinate);
        for (var i = lowestYCoordinate - currentLength; i < 9; i++) {
          sharedPointsArr.push(i);
          console.log('sharedPoints', sharedPointsArr);
        }
       return sharedPointsArr.includes(userSubmittedYCoordinate) || sharedPointsArr.includes(userSubmittedXCoordinate);
      }
        // if (lowestXCoordinate - currentLength < 0 && lowestYCoordinate - currentLength < 0) {
        //
        // }
        console.log('user coords x', userSubmittedXCoordinate, 'user coords y', userSubmittedYCoordinate);
    }
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
            userShipPlacement={this.userShipPlacement.bind(this)}
          />
      }
      </div>

    );
  }
}
export default App;
