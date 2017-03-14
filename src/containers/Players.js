import React from 'react';
import {connect} from 'react-redux';
import {calculateResult} from '../actions';
import PlayerOptions from '../components/PlayerOptions';
import {ROCK, PAPER, SCISSORS, PLAYER1, PLAYER2} from '../constants';

export default connect(
  (state) => {
    const {game} = state;
    return {
      isOpponentComputer: game.isOpponentComputer
    }
  },
  (dispathc) => {
   return {
    dispatchCalculateResult: (choice, player) => dispathc(calculateResult(choice, player))
   }
  }
)((props) => {
  const {isOpponentComputer, dispatchCalculateResult} = props;
  const onClickPaper = (player) => dispatchCalculateResult(PAPER, player);
  const onClickRock = (player) => dispatchCalculateResult(ROCK, player);
  const onClickScissors = (player) => dispatchCalculateResult(SCISSORS, player);

  const player1Style = (isOpponentComputer) ? 'player-1' : 'player-1-against-human';

  return (<div>
    <PlayerOptions
      className={player1Style}
      classNameButtons=".counter-buttons"
      onClickScissors={() => onClickScissors(PLAYER1)}
      onClickPaper={() => onClickPaper(PLAYER1)}
      onClickRock={() => onClickRock(PLAYER1)}
      titleMessage="First Player"
    />
    {(isOpponentComputer) ? '' :
      <PlayerOptions
        className="player-2"
        classNameButtons=".counter-buttons"
        onClickScissors={() => onClickScissors(PLAYER2)}
        onClickPaper={() => onClickPaper(PLAYER2)}
        onClickRock={() => onClickRock(PLAYER2)}
        titleMessage="Second Player"
      />}
  </div>);
});
