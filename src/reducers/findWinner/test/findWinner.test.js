import expect from 'expect';
import findWinner from '../';
import {ROCK, PAPER, SCISSORS} from '../../../constants';

describe('find winner specs', () => {

  it('should exist', () => {
    expect(findWinner).toExist();
  });

  describe('tests with values with player 2 always selecting SCISSORS', () => {
    it('player one wins with rock over scissors', () => {
      const result = findWinner(ROCK, SCISSORS);
      expect(result).toEqual(1);
    });

    it('player one wins with paper over scissors', () => {
      const result = findWinner(PAPER, SCISSORS);
      expect(result).toEqual(2);
    });

    it('player one wins with paper over scissors', () => {
      const result = findWinner(SCISSORS, SCISSORS);
      expect(result).toEqual(0);
    });
  });

  describe('tests with values with player 2 always selecting PAPER', () => {
    it('player one wins with rock over scissors', () => {
      const result = findWinner(ROCK, PAPER);
      expect(result).toEqual(2);
    });

    it('player one wins with paper over scissors', () => {
      const result = findWinner(PAPER, PAPER);
      expect(result).toEqual(0);
    });

    it('player one wins with paper over scissors', () => {
      const result = findWinner(SCISSORS, PAPER);
      expect(result).toEqual(1);
    });
  });

  describe('tests with values with player 2 always selecting ROCK', () => {
    it('player one wins with rock over scissors', () => {
      const result = findWinner(ROCK, ROCK);
      expect(result).toEqual(0);
    });

    it('player one wins with paper over scissors', () => {
      const result = findWinner(PAPER, ROCK);
      expect(result).toEqual(1);
    });

    it('player one wins with paper over scissors', () => {
      const result = findWinner(SCISSORS, ROCK);
      expect(result).toEqual(2);
    });
  });
});
