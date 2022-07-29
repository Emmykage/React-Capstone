import React from 'react';
import renderer from 'react-test-renderer';
import Category from '../pages/category';
import MovieDisplay from '../MovieDisplay';

const Container = () => {
  <Category>
    <MovieDisplay />
  </Category>;
};

it('DetailCard renders correctly', () => {
  const tree = renderer.create(<Container />).toJSON();
  expect(tree).toMatchSnapshot();
});
