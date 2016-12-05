import React from 'react';

const GameBoard = (props) => {
  let count = 1;
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
      {props.gameBoard.map((gameBoardArray, index) => {
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
                    {console.log('count', count)}
                    {count++}
                    {/* {props.count++} */}
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
                {console.log('tile', tile)}
                  <div>
                    <div
                      id={[tile.coordinateX, tile.coordinateY]}
                    >
                      hello
                    </div>
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
};

export default GameBoard;
