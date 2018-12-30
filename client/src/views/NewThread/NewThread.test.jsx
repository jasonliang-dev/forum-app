import React from 'react';
import { shallow } from 'enzyme';
import NewThread from './NewThread';

describe('NewThread', () => {
  it('renders without crashing', () => {
    shallow(<NewThread />);
  });
});
