import React from 'react';

const ShipSelect = (props) => {
  return (
    <div
      className='ship-select-container'
    >
      <h3>Please Select the Ship you wish to place</h3>
      <form
        className='ship-select'
        style={{width: '10px'}}
        onSubmit={props.playerSelectsShip}
      >
      {console.log('props', props.playerSelectsShip)}
        <input type='checkbox' value='destroyer' /> Destroyer
        <input type='checkbox' value='submarine' /> Submarine
        <input type='checkbox' value='cruiser' /> Cruiser
        <input type='checkbox' value='battleship' /> Battleship
        <input type='checkbox' value='carrier' /> Carrier
        <button type='submit'>Place Ship</button>
      </form>
    </div>

  );
};

export default ShipSelect;
