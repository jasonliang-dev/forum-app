import React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedHome as Home } from './Home';

describe('Home', () => {
  it('renders without crashing', () => {
    const props = {
      classes: {},
      fetchData: () => {},
    };
    shallow(<Home {...props} />);
  });

  it('fetches threads', () => {
    const mockFetch = jest.fn();
    const props = {
      classes: {},
      fetchData: mockFetch,
    };
    shallow(<Home {...props} />);
    expect(mockFetch.mock.calls.length).toBe(1);
  });
});
