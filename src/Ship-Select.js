import React from 'react';

const ShipSelect = ({currentlySelectedShips, playerSelectsShip}) => {
  return (
    <div
      className='ship-select-container'
    >
      <h3>Please Select the Ship you wish to place</h3>
      {/* <form
        className='ship-select-container'
        style={{width: '10px'}}
        onSubmit={playerSelectsShip}
      > */}
      {currentlySelectedShips.map((ship) => {
        return (
          <div
            className='ship-select-option'
            key={ship.shipName}
            onClick={() => {playerSelectsShip(ship.shipName, ship.shipLength)}}
          >
          {ship.shipName}
          </div>

        )
      })}
    </div>

  );
};

export default ShipSelect;
