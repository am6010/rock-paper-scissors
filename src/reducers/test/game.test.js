import expect from 'expect';
import game from '../game';
import {
  IS_OPPONENT_COMPUTER,
  CALCULATE_RESULT,
  ROCK,
  SCISSORS,
  PAPER,
  PLAYER1,
  PLAYER2
} from '../../constants';
import sinon from 'sinon';

const computerMove = require('../computerMove');


describe('Game reducer specs', () => {

  it('reducer should load', () => {
    expect(game).toExist();
  });

  describe('is opponent computer part', () => {

    const action = {type: IS_OPPONENT_COMPUTER};

    it('test for an empty state', () => {
      const currentState = {};
      expect(game(currentState, action).isOpponentComputer).toEqual(true);
    });

    it('test action for an existing state from false to true', () => {
      const currentState = {isOpponentComputer: false};
      expect(game(currentState, action).isOpponentComputer).toEqual(true);
    });

    it('test action for an existing state from true to false', () => {
      const currentState = {isOpponentComputer: true};
      expect(game(currentState, action).isOpponentComputer).toEqual(false);
    });
  });


  describe('Calculate result tests', () => {

    describe("test for first user select rock against computer", () =>{
      let computerMoveStub;

      beforeEach(() => {
        computerMoveStub = sinon.stub(computerMove, 'default', () => {return ROCK;});
      });

      afterEach(() => {
        computerMoveStub.restore();
      });

      it('Should return a draw', () => {

        const currentState = {
          isOpponentComputer: true,
          draws:0
        };

        const action= {
          type: CALCULATE_RESULT,
          choice: ROCK
        };

        const nextState = game(currentState, action);
        const expectedState = {
          isOpponentComputer: true,
          draws:1,
          player1Choice: undefined,
          player2Choice: undefined
        };
        expect(nextState).toEqual(expectedState);
      });

      it('Should return a draw', () => {
        const currentState = {
          isOpponentComputer: true,
          player1Wins:0
        };

        const action= {
          type: CALCULATE_RESULT,
          choice: PAPER
        };

        const nextState = game(currentState, action);
        const expectedState = {
          isOpponentComputer: true,
          player1Wins:1,
          player1Choice: undefined,
          player2Choice: undefined
        };
        expect(nextState).toEqual(expectedState);
      });

      it('Should return a draw', () => {
        const currentState = {
          isOpponentComputer: true,
          computerWins:0
        };

        const action= {
          type: CALCULATE_RESULT,
          choice: SCISSORS
        };

        const nextState = game(currentState, action);
        const expectedState = {
          isOpponentComputer: true,
          computerWins:1,
          player1Choice: undefined,
          player2Choice: undefined
        };
        expect(nextState).toEqual(expectedState);
      });

      describe('should return a result if poth playes have mad a move', () => {


        it('player 1 played first and then player 2', () => {
          const currentState = {
            isOpponentComputer: false,
            player1Choice: ROCK,
            player1Wins:0
          };

          const action= {
            type: CALCULATE_RESULT,
            choice: SCISSORS,
            player: PLAYER2
          };

          const nextState = game(currentState, action);

          const expectedState = {
            isOpponentComputer: false,
            player1Choice: undefined,
            player2Choice: undefined,
            player1Wins:1
          };

          expect(nextState).toEqual(expectedState);
        });

        it('player 2 played first and then player 1', () => {
          const currentState = {
            isOpponentComputer: false,
            player2Choice: ROCK,
            player2Wins:0
          };

          const action= {
            type: CALCULATE_RESULT,
            choice: SCISSORS,
            player: PLAYER1
          };

          const nextState = game(currentState, action);

          const expectedState = {
            isOpponentComputer: false,
            player1Choice: undefined,
            player2Choice: undefined,
            player2Wins:1
          };

          expect(nextState).toEqual(expectedState);
        });

        it('just player 2 playes', () => {
          const currentState = {
            isOpponentComputer: false,
            player2Wins:0
          };

          const action= {
            type: CALCULATE_RESULT,
            choice: SCISSORS,
            player: PLAYER2
          };

          const nextState = game(currentState, action);

          const expectedState = {
            isOpponentComputer: false,
            player2Choice: SCISSORS,
            player2Wins:0
          };

          expect(nextState).toEqual(expectedState);
        });

        it('just player 1 playes', () => {
          const currentState = {
            isOpponentComputer: false
          };

          const action= {
            type: CALCULATE_RESULT,
            choice: SCISSORS,
            player: PLAYER1
          };

          const nextState = game(currentState, action);

          const expectedState = {
            isOpponentComputer: false,
            player1Choice: SCISSORS
          };

          expect(nextState).toEqual(expectedState);
        });
      });
    });
  });
});
