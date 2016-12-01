import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameBoard: null,
      count: 0
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
    this.setState({ gameBoard: arr });
  }

   verticalCount() {
    this.setState({ count: this.state.count++ });
   }

  render() {
    return (
      <div
        className='table'
      >
        <div
          className='row'
          style={{ clear: 'left', overflow: 'hidden' }}
        >
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          </div>
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          A
          </div>
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          B
          </div>
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          C
          </div>
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          D
          </div>
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          E
          </div>
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          F
          </div>
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          G
          </div>
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          H
          </div>
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          I
          </div>
          <div
            className='cell-outer'
            style={{
                float: 'left',
                width: '30px',
                padding: '2px',
                height: '30px',
                borderRight: '1px solid #5C9DC2',
                borderBottom: '1px solid #5C9DC2'
              }}
          >
          J
          </div>
        </div>
        {this.state.gameBoard.map((gameBoardArray, index) => {
          return (
            <div className='row'
              style={{ clear: 'left', overflow: 'hidden' }}
            >
              <div className='cell-outer'>
              {gameBoardArray.map((startingTile, index) =>
                <div className={`${index}`}>
                  {index === 0
                    ?
                    <div
                      style={{
                        float: 'left',
                        width: '30px',
                        padding: '2px',
                        height: '30px',
                        borderRight: '1px solid #5C9DC2',
                        borderBottom: '1px solid #5C9DC2',
                        background: '#3a7ca8',
                        textAlign: 'center',
                        lineHeight: '30px',
                        color: '#071E7A',
                        textShadow: '#FFFFFF 0.05em 0.05em 0.1em'
                      }}
                    >
                      {this.state.count++}
                    </div>
                    : null
                  }
                </div>
              )}
              {gameBoardArray.map((tile, index) => {
                return (

                  <div className='cell-inner'
                    style={{
                      float: 'left',
                      width: '30px',
                      padding: '2px',
                      height: '30px',
                      borderRight: '1px solid #5C9DC2',
                      borderBottom: '1px solid #5C9DC2'
                    }}
                  >
                    <div>
                    Tile
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
