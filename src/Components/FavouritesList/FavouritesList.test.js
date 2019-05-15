import React from 'react';
import { shallow } from 'enzyme';
import FavouritesList from './FavouritesList';

const favourites = [
  {
    id: 81,
    name: 'India Session Lager - Prototype Challenge',
  },
];

const removeFromFavourites = jest.fn();

const mockProps = {
  favourites,
  removeFromFavourites,
};

const mockUuidKey = '00000000-0000-0000-0000-000000000000';

jest.mock('uuid/v4', () => () => mockUuidKey);

const setUp = (props = mockProps) => {
  const wrapper = shallow(<FavouritesList {...props} />);
  return wrapper;
};

describe('FavouritesList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it('should render correctly with mock props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders list items mapped from props correctly', () => {
    const texts = wrapper.find('ul').map(node => node.text());
    expect(texts).toEqual(['India Session Lager - Prototype Challenge - ']);
    expect(wrapper.find('ul').exists()).toEqual(true);
    expect(wrapper.find('li').length).toBe(1);
  });
});
