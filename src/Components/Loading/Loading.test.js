import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading', () => {
  it('should render correctly with no props', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
