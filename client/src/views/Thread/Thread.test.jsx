import React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedThread as Thread } from './Thread';

const defaultProps = {
  classes: {},
  additionalReplies: [],
  fetchData: () => {},
  addToReplyList: () => {},
  clearReplyStore: () => {},
  match: { params: { id: '' } },
};

describe('Thread', () => {
  it('renders without crashing', () => {
    const props = defaultProps;
    shallow(<Thread {...props} />);
  });

  it('fetches threads', () => {
    const mockFetch = jest.fn();
    const props = {
      ...defaultProps,
      fetchData: mockFetch,
    };
    shallow(<Thread {...props} />);
    expect(mockFetch.mock.calls.length).toBe(1);
  });

  it('clears the additional reply store on mount', () => {
    const mockClear = jest.fn();
    const props = {
      ...defaultProps,
      clearReplyStore: mockClear,
    };
    shallow(<Thread {...props} />);
    expect(mockClear.mock.calls.length).toBe(1);
  });
});
