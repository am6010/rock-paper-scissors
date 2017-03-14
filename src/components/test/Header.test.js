import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import expect from 'expect';
import Header from '../Header';

describe('Header specs', () => {
  const header = ReactDOM.findDOMNode(ReactTestUtils.renderIntoDocument(Header()));

  it('should load', () => {
    expect(header).toExist();
  });

  it('should have text', () => {
    expect(header.textContent).toEqual('Rock Paper Scissors Game');
  });
});
