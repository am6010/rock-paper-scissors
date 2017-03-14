import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import ChooseOpponent from '../ChooseOpponent';

describe('Choose Opponent Specs', () => {

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

  describe('id opponent false', () => {

    const result = mount(<Provider store={store(false)}>
      <ChooseOpponent />
    </Provider>);

    it('Test component with false initial state', () => {
      expect(result).toExist();
    });

    it('Test the behaviour of the component', () => {
      expect(result.find('#computer').props().checked).toEqual(false);
      expect(result.find('#human').props().checked).toEqual(true);
    });
  });

  describe('id opponent true', () => {

    const result = mount(<Provider store={store(true)}>
      <ChooseOpponent />
    </Provider>);

    it('Test the behaviour of the component', () => {
      expect(result.find('#computer').props().checked).toEqual(true);
      expect(result.find('#human').props().checked).toEqual(false);
    });
  });
});
