import expect from 'expect';
import {isOpponentComputer} from '../';
import {IS_OPPONENT_COMPUTER} from '../../constants';

describe('Test action is OpponentCompuer', () => {

  it('should load the function', () => {
    expect(isOpponentComputer).toExist();
  });

  describe('Test the behaviour', () => {
    it('it should return the correct type',() => {
      const {type} = isOpponentComputer();
      expect(type).toEqual(IS_OPPONENT_COMPUTER);
    });
  });
});
