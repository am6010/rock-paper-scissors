import {ROCK_PAPER_SCISSORS} from '../../constants';


export default () => {
 const idx =  randomIntFromInterval(0, 2);
 return ROCK_PAPER_SCISSORS[idx];
};


function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
