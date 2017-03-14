import expect from 'expect';
import {addTodo} from '../';

describe('Actions specs', () => {

  it('should load the addTodo', () => {
    expect(addTodo).toExist();
  });

  describe('add todo', () => {

    it('test with text', () => {
      const input = 'test text';
      const result = addTodo(input);
      expect(result.type).toEqual('ADD_TODO');
      expect(result.text).toEqual(input);
      expect(result.id).toEqual(0);
    });

    it('second addition', () => {
      const result = addTodo('second time');
      expect(result.id).toEqual(1);
    });
  });
});
