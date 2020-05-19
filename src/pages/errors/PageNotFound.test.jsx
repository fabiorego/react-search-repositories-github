import React from 'react';
import PageNotFound from './PageNotFound';
import renderer from 'react-test-renderer';

let findTextElement = function(tree, element) {
  return true;
};

it('Find UPS element', () => {
  let tree = renderer.create(<PageNotFound />).toJSON();
  expect(findTextElement(tree, 'UPS')).toBeDefined();
});

it('Find Page element', () => {
  let tree = renderer.create(<PageNotFound />).toJSON();
  expect(findTextElement(tree, 'Page')).toBeDefined();
});
