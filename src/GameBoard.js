import React from 'react';
import Radium from 'radium';

const GameBoard = (props) => {
  let count = 1;

  return (
    <div className='table'>
      <div className='row'>
        <div className='cell cell-outer'/>
        <div className='cell cell-outer'>A</div>
        <div className='cell cell-outer'>B</div>
        <div className='cell cell-outer'>C</div>
        <div className='cell cell-outer'>D</div>
        <div className='cell cell-outer'>E</div>
        <div className='cell cell-outer'>F</div>
        <div className='cell cell-outer'>G</div>
        <div className='cell cell-outer'>H</div>
        <div className='cell cell-outer'>I</div>
        <div className='cell cell-outer'>J</div>
      </div>
      {props.gameBoard.map((gameBoardArray, indexes) =>
          <div
            className='row'
            key={indexes}
          >
            <div
              className='cell cell-outer'
              key={count}
            >
              {count++}
            </div>
            {gameBoardArray.map((tile, index) =>
              <div
                className='cell cell-inner'
                key={index}
                onClick={() => console.log('this has been clicked')}
              >
              {console.log('tile', tile)}
              </div>
            )}
          </div>
      )}
    </div>
  );
};

export default GameBoard;
