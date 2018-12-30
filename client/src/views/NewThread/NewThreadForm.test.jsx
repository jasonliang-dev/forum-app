import React from 'react';
import { shallow } from 'enzyme';
import NewThreadForm from './NewThreadForm';

describe('NewThreadForm', () => {
  it('renders without crashing', () => {
    shallow(<NewThreadForm />);
  });
});
