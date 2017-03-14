import {ROCK, PAPER, SCISSORS} from '../../constants';

export default (move1, move2) => {
  if(move1 === move2) {
    return 0;
  }
  switch (move1) {
    case ROCK:
      return (move2 === SCISSORS) ? 1 : 2;
    case PAPER:
      return (move2 === ROCK) ? 1 : 2;
    default:
      return (move2 === PAPER) ? 1 : 2;
  }
}
