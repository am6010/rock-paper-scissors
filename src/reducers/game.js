import {
  IS_OPPONENT_COMPUTER,
  CALCULATE_RESULT,
  PLAYER1,
  PLAYER2
} from '../constants';

import computerMove from './computerMove';
import findWinner from './findWinner';

const initialState= {
  isOpponentComputer: true,
  player1Wins: 0,
  computerWins: 0,
  player2Wins: 0,
  draws: 0,
  player1Choice: undefined,
  player2Choice: undefined
};

export default (state=initialState, action) => {

  const {type} = action;

  switch (type) {
    case IS_OPPONENT_COMPUTER:
      const {isOpponentComputer} = state;
      const newValue = (isOpponentComputer) ? !isOpponentComputer : true;
      return Object.assign({}, initialState, {isOpponentComputer: newValue});

    case CALCULATE_RESULT:
      return calculateResult(state, action);
    default:
      return state;
  }
};


function calculateResult(state, action) {
  const {isOpponentComputer, player1Choice, player2Choice} = state;
  if (isOpponentComputer) {
    const move = computerMove();
    return readyToPlay(state, action.choice, move);
  } else {

    if(action.player === PLAYER1) {
      if(player2Choice) {
        return readyToPlay(state, action.choice, player2Choice);
      }
      return Object.assign({}, state, {player1Choice: action.choice});
    }

    if(action.player === PLAYER2) {
      if (player1Choice) {
        return readyToPlay(state, player1Choice, action.choice);
      }
      return Object.assign({}, state, {player2Choice: action.choice});
    }

  }
  return state;
}


function readyToPlay(state, firstMove, secondMove) {
  const {isOpponentComputer, player1Wins, player2Wins,computerWins, draws} = state;
  const result = findWinner(firstMove, secondMove);

  const opponentUpdate = (isOpponentComputer)
    ? {computerWins: computerWins+1, player1Choice: undefined, player2Choice: undefined}
    : {player2Wins: player2Wins+1, player1Choice: undefined, player2Choice: undefined};

  switch(result) {
    case 0:
      return Object.assign({}, state, {draws: draws+1, player1Choice: undefined, player2Choice: undefined});
    case 1:
      return Object.assign({}, state, {player1Wins: player1Wins+1, player1Choice: undefined, player2Choice: undefined});
    default :
      return Object.assign({}, state, opponentUpdate);
  }
}


