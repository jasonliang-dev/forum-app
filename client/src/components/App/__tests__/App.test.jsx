import React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedApp as App } from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    const props = {
      counter: 0,
      plus() {},
      minus() {},
    };
    shallow(<App {...props} />);
  });
});
