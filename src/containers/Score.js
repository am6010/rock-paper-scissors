import React from 'react';
import {connect} from 'react-redux';

export default connect(
  (state) => {
    const {game} = state;
    const {isOpponentComputer, player1Wins, computerWins, player2Wins, draws} = game;
    return{
      isOpponentComputer,
      player1Wins,
      player2Wins,
      computerWins,
      draws
    };
  }
)((props) => {
  const {isOpponentComputer, player1Wins, computerWins, player2Wins, draws} = props;

  const opponentName = (isOpponentComputer) ? 'Computer': 'Player 2';
  const opponentScore = (isOpponentComputer) ? computerWins: player2Wins;

  return(
    <div className="score-style">
      <table>
        <tbody>
        <tr>
          <th id="player1">Player 1</th>
          <th id="opponent">{opponentName}</th>
          <th id="draws">Draws</th>
        </tr>
        <tr>
          <td id="player1Score">{player1Wins}</td>
          <td id="opponentScore">{opponentScore}</td>
          <td id="drawsScore">{draws}</td>
        </tr>
        </tbody>
      </table>
  </div>);
});
