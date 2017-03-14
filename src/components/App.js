import React from 'react'
import Header from './Header';
import Opponent from '../containers/ChooseOpponent';
import Playes from '../containers/Players';
import Score from '../containers/Score';
import GameMessage from '../containers/GameMessage';
import Main from '../style/main.scss';

const App = () => (
  <div className="main-app-container">
    <Header />
    <Opponent />
    <Playes />
    <Score />
    <GameMessage />
  </div>
);

export default App
