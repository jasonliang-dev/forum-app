import React from 'react';
import { shallow } from 'enzyme';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
  it('renders without crashing', () => {
    shallow(<RegisterForm />);
  });
});
