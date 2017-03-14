import React from 'react';
import {connect} from 'react-redux';
import {calculateResult} from '../actions';

export default connect(
  (state) => {
    const {isOpponentComputer, player1Choice, player2Choice} = state.game;
    return {
      isOpponentComputer,
      player1Choice,
      player2Choice
    };
  }
)((props) => {

  const {isOpponentComputer, player1Choice, player2Choice} = props;

  if(isOpponentComputer) {
    return null;
  }

  if(!player1Choice && !player2Choice) {
    return (<div id="message">Either player 1 or player 2 should choose</div>);
  }

  if(player1Choice && !player2Choice) {
    return (<div  id="message">Player 2 should choose</div>);
  }

  if(!player1Choice && player2Choice) {
    return (<div id="message">Player 1 should choose</div>);
  }

  return null;

});
