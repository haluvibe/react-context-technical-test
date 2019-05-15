import React from 'react';
import { shallow } from 'enzyme';
import Empty from './Empty';

describe('Empty', () => {
  it('should render correctly with no props', () => {
    const wrapper = shallow(<Empty />);

    expect(wrapper).toMatchSnapshot();
  });
});
