import React from 'react';
import { shallow } from 'enzyme';
import InputField from './InputField';

describe('InputField', () => {
  it('renders without crashing', () => {
    shallow(<InputField />);
  });
});
