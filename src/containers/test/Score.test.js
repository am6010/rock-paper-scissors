import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import Score from '../Score'

describe('Score board specs', () => {

  const store = value => {
    return {
      getState : () => {
        return {
          game: {
            isOpponentComputer: value,
            player1Wins: 2,
            player2Wins: 1,
            computerWins: 3,
            draws: 2
          }
        };
      },
      subscribe: () => {},
      dispatch: () => {}
    }
  };

  describe('Boards when playing against computer', () => {
    const result = mount(<Provider store={store(true)}>
        <Score />
      </Provider>
    );

    it('test it loads', () => {
      expect(result).toExist();
    });

    it('headers test', () => {
      expect(result.find('#player1').text()).toEqual('Player 1');
      expect(result.find('#opponent').text()).toEqual('Computer');
      expect(result.find('#draws').text()).toEqual('Draws');
    });

    it('scores test', () => {
      expect(result.find('#player1Score').text()).toEqual('2');
      expect(result.find('#opponentScore').text()).toEqual('3');
      expect(result.find('#drawsScore').text()).toEqual('2');
    });
  });

  describe('Boards when playing against computer', () => {
    const result = mount(<Provider store={store(false)}>
        <Score />
      </Provider>
    );

    it('test it loads', () => {
      expect(result).toExist();
    });

    it('headers test', () => {
      expect(result.find('#player1').text()).toEqual('Player 1');
      expect(result.find('#opponent').text()).toEqual('Player 2');
      expect(result.find('#draws').text()).toEqual('Draws');
    });

    it('scores test', () => {
      expect(result.find('#player1Score').text()).toEqual('2');
      expect(result.find('#opponentScore').text()).toEqual('1');
      expect(result.find('#drawsScore').text()).toEqual('2');
    });
  });
});
