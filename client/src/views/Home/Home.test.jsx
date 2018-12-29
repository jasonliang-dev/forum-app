import React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedHome as Home } from './Home';

describe('Home', () => {
  it('renders without crashing', () => {
    const props = {
      classes: {},
      fetchThreads: () => {},
      threads: [],
      isLoading: false,
      errorOccurred: false,
    };
    shallow(<Home {...props} />);
  });

  it('fetches threads', () => {
    const mockFetch = jest.fn();
    const props = {
      classes: {},
      fetchThreads: mockFetch,
      threads: [],
      isLoading: false,
      errorOccurred: false,
    };
    shallow(<Home {...props} />);
    expect(mockFetch.mock.calls.length).toBe(1);
  });
});
