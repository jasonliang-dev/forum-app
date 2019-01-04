import React from 'react';
import { shallow } from 'enzyme';
import Replies from './Replies';

describe('Replies', () => {
  it('renders without crashing', () => {
    shallow(<Replies replyData={[]} />);
  });
});
