import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  it('should render correctly with no props', () => {
    const wrapper = shallow(<Error />);

    expect(wrapper).toMatchSnapshot();
  });
});
