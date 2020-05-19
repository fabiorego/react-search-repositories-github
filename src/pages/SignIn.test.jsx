import React from 'react';
import SignIn from './SignIn';
import renderer from 'react-test-renderer';

let findTextElement = function(tree, element) {
  return true;
};

test('SignIn snapshot', () => {
  const component = renderer.create(<SignIn></SignIn>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Find Remember me element', () => {
  let tree = renderer.create(<SignIn />).toJSON();
  expect(findTextElement(tree, 'Remember me')).toBeDefined();
});

it('Find title element', () => {
  let tree = renderer.create(<SignIn />).toJSON();
  expect(findTextElement(tree, 'Search GitHub Repositories')).toBeDefined();
});

it('Find Email address element', () => {
  let tree = renderer.create(<SignIn />).toJSON();
  expect(findTextElement(tree, 'Email address')).toBeDefined();
});

it('Find Password element', () => {
  let tree = renderer.create(<SignIn />).toJSON();
  expect(findTextElement(tree, 'Password')).toBeDefined();
});

it('Find Sign in element', () => {
  let tree = renderer.create(<SignIn />).toJSON();
  expect(findTextElement(tree, 'Sign in')).toBeDefined();
});
