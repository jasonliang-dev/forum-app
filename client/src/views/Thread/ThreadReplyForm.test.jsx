import React from 'react';
import { shallow } from 'enzyme';
import ThreadReplyForm from './ThreadReplyForm';

describe('ThreadReplyForm', () => {
  it('renders without crashing', () => {
    shallow(<ThreadReplyForm />);
  });
});
