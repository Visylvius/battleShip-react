import React from 'react';
import Radium from 'radium';

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
                <div
                  className='cell-inner'
                  style={{
                    float: 'left',
                    width: '30px',
                    padding: '2px',
                    height: '30px',
                    borderRight: '1px solid #5C9DC2',
                    borderBottom: '1px solid #5C9DC2',
                    background: '#071e7a',
                    background: "-moz-radial-gradient('center', 'ellipse cover', '#071e7a 0%', '#3eabcd 9%', '#3eabcd 15%', '#3a7ca8 29%', '#6598c0 100%')",
                    background: "-webkit-gradient('radial', 'center center', '0px', 'center center', '100%, color-stop(0%, #ff0f13)', 'color-stop(14%, #9b3032)', 'color-stop(24%, #3eabcd)', 'color-stop(24%, #3eabcd)', 'color-stop(29%, #3a7ca8)', 'color-stop(55%, #3eabcd)', 'color-stop(100%, #6598c0)')"

                  }}
                  onClick={() => console.log('this has been clicked')}
                >
                {console.log('tile', tile)}
                  {/* <div>
                    <div
                      id={[tile.coordinateX, tile.coordinateY]}
                      onClick={() => { console.log('this has been clicked')}}
                    >
                    </div>
                  </div> */}
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

export default Radium(GameBoard);
