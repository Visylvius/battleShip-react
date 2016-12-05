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
        <input type='radio' name='ship' value='2' /> Destroyer
        <input type='radio' id='submarine' name='ship' value='3' /> Submarine
        <input type='radio' id='cruiser' name='ship' value='3' /> Cruiser
        <input type='radio' name='ship' value='4' /> Battleship
        <input type='radio' name='ship' value='5' /> Carrier
        <button type='submit'>Place Ship</button>
      </form>
    </div>

  );
};

export default ShipSelect;
