import React from 'react';
import { shallow } from 'enzyme';
import UserMessage from './UserMessage';

describe('UserMessage', () => {
  it('renders without crashing', () => {
    shallow(<UserMessage />);
  });
});
