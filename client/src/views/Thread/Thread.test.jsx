import React from 'react';
import { shallow } from 'enzyme';
import Thread from './Thread';

describe('Thread', () => {
  it('renders without crashing', () => {
    shallow(<Thread />);
  });
});
