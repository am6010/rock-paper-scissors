import expect from 'expect';
import {calculateResult} from '../';
import {CALCULATE_RESULT, ROCK, PLAYER1} from '../../constants';

describe('Test action is OpponentComputer', () => {

  it('should load the function', () => {
    expect(calculateResult).toExist();
  });

  describe('Test the behaviour', () => {
    it('it should return the correct type',() => {
      const {type, choice} = calculateResult(ROCK);
      expect(type).toEqual('CALCULATE_RESULT');
      expect(choice).toEqual(ROCK);
    });
  });

  describe('Test the behaviour', () => {
    it('it should return the correct type',() => {
      const {type, choice, player} = calculateResult(ROCK, PLAYER1);
      expect(type).toEqual('CALCULATE_RESULT');
      expect(choice).toEqual(ROCK);
      expect(player).toEqual(PLAYER1);
    });
  });
});
