import {IS_OPPONENT_COMPUTER, CALCULATE_RESULT} from '../constants';

export const isOpponentComputer = () => {
  return{
    type: IS_OPPONENT_COMPUTER
  };
};

export const calculateResult = (choice, player) => {
  return {
    type: CALCULATE_RESULT,
    choice,
    player
  };
};

let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
