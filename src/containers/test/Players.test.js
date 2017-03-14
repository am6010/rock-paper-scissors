import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import Player from '../Players'

describe('Players component', () => {
  const store = value => {
    return {
      getState : () => {
        return {
          game: {
            isOpponentComputer: value
          }
        };
      },
      subscribe: () => {},
      dispatch: () => {}
    }
  };

  describe('when playing against human', () => {
    const result = mount(<Provider store={store(true)}>
      <Player />
    </Provider>);

    it('should mount the component', () => {
      expect(result).toExist();
    });

    it('should have only one sub-component', () => {
      expect(result.find('.player-1-against-human')).toExist();
    });

    it('should have only one sub-component', () => {
      expect(result.find('.player-2')).toExist();
    });
  });


  describe('when playing against computer', () => {
    const result = mount(<Provider store={store(false)}>
      <Player />
    </Provider>);

    it('should mount the component', () => {
      expect(result).toExist();
    });

    it('should have only one sub-component', () => {
      expect(result.find('.player-1')).toExist();
    });
  });
});
