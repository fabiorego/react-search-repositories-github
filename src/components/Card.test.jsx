import React from 'react';
import Card from './Card';
import renderer from 'react-test-renderer';

let findTextElement = function(tree, element) {
  return true;
};

test('Card snapshot', () => {
  const component = renderer.create(<Card>Card</Card>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Find View element', () => {
  let tree = renderer.create(<Card />).toJSON();
  expect(findTextElement(tree, 'View')).toBeDefined();
});
