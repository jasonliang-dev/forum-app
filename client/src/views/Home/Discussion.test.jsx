import React from 'react';
import { shallow } from 'enzyme';
import Discussion from './Discussion';

describe('Discussion', () => {
  it('renders without crashing', () => {
    const props = {
      title: 'foo',
      user: 'alice',
      to: '/',
      views: 0,
      replyCount: 0,
    };
    shallow(<Discussion {...props} />);
  });
});
