import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import GameMessage from '../GameMessage';
import {ROCK} from '../../constants';

describe('Game Message specs', ()=> {
  const store = (value, choice1=undefined, choice2=undefined) => {
    return {
      getState : () => {
        return {
          game: {
            isOpponentComputer: value,
            player1Choice: choice1,
            player2Choice: choice2
          }
        };
      },
      subscribe: () => {},
      dispatch: () => {}
    };
  };

  describe('Computer opponent', () => {
    const result = mount( <Provider store={store(true)}>
      <GameMessage />
    </Provider>);

    it('should load', () => {
      expect(result).toExist();
    });

    it('shounlt not appean', () => {
      expect(result.find('#message').component).toEqual(null);
    });
  });


  describe('Human opponent case 2 player should choose', () => {
    const result = mount( <Provider store={store(false, ROCK)}>
      <GameMessage />
    </Provider>);

    it('should load', () => {
      expect(result).toExist();
    });

    it('shounlt not appean', () => {
      expect(result.find('#message').text()).toEqual('Player 2 should choose');
    });
  });

  describe('Human opponent either should choose', () => {
    const result = mount( <Provider store={store(false)}>
      <GameMessage />
    </Provider>);

    it('should load', () => {
      expect(result).toExist();
    });

    it('shounlt not appean', () => {
      expect(result.find('#message').text()).toEqual('Either player 1 or player 2 should choose');
    });
  });

  describe('Human opponent case player 1 should choose', () => {
    const result = mount( <Provider store={store(false, undefined, ROCK)}>
      <GameMessage />
    </Provider>);

    it('should load', () => {
      expect(result).toExist();
    });

    it('shounlt not appean', () => {
      expect(result.find('#message').text()).toEqual('Player 1 should choose');
    });
  });

});

