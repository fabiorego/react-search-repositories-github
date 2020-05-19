import React from 'react';
import Search from './Search';
import renderer from 'react-test-renderer';

let findTextElement = function(tree, element) {
  return true;
};

test('Search snapshot', () => {
  const component = renderer.create(<Search></Search>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Find Your search element', () => {
  let tree = renderer.create(<Search />).toJSON();
  expect(findTextElement(tree, 'Your search')).toBeDefined();
});
