import React from 'react';
import {connect} from 'react-redux';
import {isOpponentComputer} from '../actions';

export default connect(
  (state) => {
    const {game} = state;
    return {
      isOpponentComputer: game.isOpponentComputer
    };
  },
  (dispatch) => {
    return {
      changeValue: () => dispatch(isOpponentComputer())
    };
  }
)((props) => {
  const {isOpponentComputer, changeValue}  = props;
  return (
    <div className="choose-opponent">
      <div>Select Second Player:</div>
      <div>
        <label>
          Computer
          <input id="computer"
                 type="radio"
                 value={isOpponentComputer}
                 checked={isOpponentComputer}
                 onChange={changeValue}
          />
        </label>
        <label>
          Human
          <input
            id="human"
            type="radio"
            value={!isOpponentComputer}
            checked={!isOpponentComputer}
            onChange={changeValue}
          />
        </label>
      </div>
    </div>
  );
});
