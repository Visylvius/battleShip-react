import React from 'react';
import update from 'immutability-helper';

import ShipSelect from './Ship-Select';
import GameBoard from './GameBoard';
import {
  checkForNegativePlacement,
  checkForPointsAbove9,
  checkForDiagonalPlacement,
  placementPointsForLength3orMore,
  remainingLength3Placement
} from './Helpers/helper-functions';

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

  checkForLowestXPoint(currentXPoint, lowestXPoint) {
    if (currentXPoint < lowestXPoint) {
      console.log('in checkForLowestXPoint');
      let newState = update(this.state.player1PlacementGrid, {
        lowestXCoordinate: { $set: currentXPoint }
      });
      this.setState({ player1PlacementGrid: newState }, () => {
        console.log('new state', this.state);
      });
      console.log('newState after function call', this.state);
    }
  }

  checkForLowestYPoint(currentYPoint, lowestYPoint) {
    if (currentYPoint < lowestYPoint) {
      console.log('in checkForLowestXPoint');
      let newState = update(this.state.player1PlacementGrid, {
        lowestYCoordinate: { $set: currentYPoint }
      });
      this.setState({ player1PlacementGrid: newState }, () => {
        console.log('new state', this.state);
      });
      console.log('newState after function call', this.state);
    }
  }

  checkForHighestXPoint(currentXPoint, highestXPoint) {
    if (currentXPoint > highestXPoint) {
      let newState = update(this.state.player1PlacementGrid, {
        highestXCoordinate: { $set: currentXPoint }
      });
      this.setState({ player1PlacementGrid: newState }, () => {
        console.log('new state', this.state);
      });
      console.log('newState after function call', this.state);
    }
  }

  checkForHighestYPoint(currentYPoint, highestYPoint) {
    if (currentYPoint > highestYPoint) {
      console.log('in checkForLowestXPoint');
      let newState = update(this.state.player1PlacementGrid, {
        highestYCoordinate: { $set: currentYPoint }
      });
      this.setState({ player1PlacementGrid: newState }, () => {
        console.log('new state', this.state);
      });
      console.log('newState after function call', this.state);
    }
  }

  updateStateAfterProperPlacement(planeOfMovement, userSubmittedXCoord, userSubmittedYCoord, lowestCoord, highestCoord) {
    let currentLength = this.state.currentlySelectedShipRemainingLength - 1;
    if (planeOfMovement === 'x') {
      this.checkForHighestXPoint(userSubmittedXCoord, highestCoord) && this.checkForLowestXPoint(userSubmittedXCoord, lowestCoord);
      this.setState({
        currentlySelectedShipRemainingLength: currentLength,
        player1lastShipPlacementCoordinates: {
          xCoord: userSubmittedXCoord,
          yCoord: userSubmittedYCoord
        }
      }, () => {
        console.log('new state after x has been updated', this.state)
      });
    } else if (planeOfMovement === 'y') {
      this.checkForHighestYPoint(userSubmittedYCoord, highestCoord) && this.checkForLowestYPoint(userSubmittedYCoord, lowestCoord);
      this.setState({
        currentlySelectedShipRemainingLength: currentLength,
        player1lastShipPlacementCoordinates: {
          xCoord: userSubmittedXCoord,
          yCoord: userSubmittedYCoord
        }
      }, () => {
        console.log('new state after y has been updated', this.state);
      });
    }
  }


  userShipPlacement(userSubmittedTile) {
    //include consts for userSubmittedTile.coordinateX && y && containsShip
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
      console.log('remainingLength', this.state.currentlySelectedShipRemainingLength);
      console.log('else if userSubmittedTile === false');
      // console.log('result of function Call check proper ship placement', this.checkForProperShipPlacement(userSubmittedTile.coordinateX, userSubmittedTile.coordinateY));
      if (this.checkForProperShipPlacement(userSubmittedTile.coordinateX, userSubmittedTile.coordinateY)) {
        console.log('userSubmittedTile', userSubmittedTile);
        userSubmittedTile.containsShip = true;
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
    let lastXCoordinate = this.state.player1lastShipPlacementCoordinates.xCoord;
    let lastYCoordinate = this.state.player1lastShipPlacementCoordinates.yCoord
    if (currentLength > 2) {
      if (checkForDiagonalPlacement(lastXCoordinate, lastYCoordinate, userSubmittedXCoordinate, userSubmittedYCoordinate) === 'y') {
        if (remainingLength3Placement(currentLength, userSubmittedYCoordinate)) {
          this.updateStateAfterProperPlacement('y', userSubmittedXCoordinate, userSubmittedYCoordinate, lowestYCoordinate, highestYCoordinate);
          return true;
        }
      } else if (checkForDiagonalPlacement(lastXCoordinate, lastYCoordinate, userSubmittedXCoordinate, userSubmittedYCoordinate) === 'x') {
        remainingLength3Placement(currentLength, userSubmittedXCoordinate);
        this.updateStateAfterProperPlacement('x', userSubmittedXCoordinate, userSubmittedYCoordinate, lowestXCoordinate, highestXCoordinate);
        return true;
      }
    console.log('user coords x', userSubmittedXCoordinate, 'user coords y', userSubmittedYCoordinate);
    return false;
  } else if (currentLength <= 2) {
      
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
