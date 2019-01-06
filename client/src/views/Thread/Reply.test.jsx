import React from 'react';
import { shallow } from 'enzyme';
import Reply from './Reply';

describe('Reply', () => {
  it('renders without crashing', () => {
    const props = {
      children: '',
      created: '',
      username: '',
    };
    shallow(<Reply {...props} />);
  });
});
