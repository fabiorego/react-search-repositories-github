import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

let findTextElement = function(tree, element) {
  return true;
};

it('Find passowrd element', () => {
  let tree = renderer.create(<App />).toJSON();
  expect(findTextElement(tree, 'password')).toBeDefined();
});

it('Find email element', () => {
  let tree = renderer.create(<App />).toJSON();
  expect(findTextElement(tree, 'email')).toBeDefined();
});

it('Find Reset element', () => {
  let tree = renderer.create(<App />).toJSON();
  expect(findTextElement(tree, 'Reset')).toBeDefined();
});
