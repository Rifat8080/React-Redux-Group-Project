/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
import React from 'react';
import renderer from 'react-test-renderer';
import Rockets from '../components/Rockets';

test('Rockets component renders correctly', () => {
  const tree = renderer.create(<Rockets />).toJSON();
  expect(tree).toMatchSnapshot();
});
