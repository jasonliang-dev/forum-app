import React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedThread as Thread } from './Thread';

describe('Thread', () => {
  it('renders without crashing', () => {
    const props = {
      classes: {},
      fetchData: () => {},
      match: { params: { id: '' } },
    };
    shallow(<Thread {...props} />);
  });

  it('fetches threads', () => {
    const mockFetch = jest.fn();
    const props = {
      classes: {},
      fetchData: mockFetch,
      match: { params: { id: '' } },
    };
    shallow(<Thread {...props} />);
    expect(mockFetch.mock.calls.length).toBe(1);
  });
});
