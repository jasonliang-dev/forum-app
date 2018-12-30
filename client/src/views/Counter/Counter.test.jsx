import React from 'react';
import { shallow } from 'enzyme';
import { DisconnectedCounter as Counter } from './Counter';

describe('Counter', () => {
  it('renders without crashing', () => {
    const props = {
      counter: 0,
      plus() {},
      minus() {},
    };
    shallow(<Counter {...props} />);
  });
});
