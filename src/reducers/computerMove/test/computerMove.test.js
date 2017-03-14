import expect from 'expect'
import computerMove from '../';
import {ROCK, PAPER, SCISSORS, ROCK_PAPER_SCISSORS} from '../../../constants'

describe('Computer Move Specs', () => {
  it('should be loaded ', () => {
    expect(computerMove).toExist();
  });

  describe('Should always return values in a the expected domains', () => {

    const range = [...Array(100).keys()];
    it('check the value for 100 times', () => {
      range.forEach(i => {
        const move = computerMove();
        expect(ROCK_PAPER_SCISSORS.includes(move)).toEqual(true);
      });
    });

    it('should generate different values', () => {
      const values = range
        .map(i => computerMove())
        .reduce((a,v) => {
          a[v] = a[v] + 1;
          return a;
        },{ROCK:0, PAPER: 0, SCISSORS: 0});

      expect(values[ROCK] > 0).toEqual(true);
      expect(values[PAPER] > 0).toEqual(true);
      expect(values[SCISSORS] > 0).toEqual(true);
    });
  });
});
