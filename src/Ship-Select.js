import React from 'react';

const ShipSelect = ({currentlySelectedShips, playerSelectsShip}) => {
  return (
    <div
      className='ship-select-container'
    >
      <h3>Please Select the Ship you wish to place</h3>
      <form
        className='ship-select'
        style={{width: '10px'}}
        onSubmit={playerSelectsShip}
      >
      {currentlySelectedShips.map((ship) => {
        return (
          <div>
            {console.log('ship', ship)}
            <input type='radio' name='ship' />
          </div>

        )
      })}

        <button type='submit'>Place Ship</button>
      </form>
    </div>

  );
};

export default ShipSelect;
