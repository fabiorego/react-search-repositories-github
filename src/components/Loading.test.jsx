import React from 'react';
import Loading from './Loading';
import renderer from 'react-test-renderer';

let findTextElement = function(tree, element) {
  return true;
};

test('Loading snapshot', () => {
  const component = renderer.create(<Loading></Loading>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Find Moment element', () => {
  let tree = renderer.create(<Loading />).toJSON();
  expect(findTextElement(tree, 'Moment')).toBeDefined();
});
