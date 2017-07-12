import * as React from 'react';
import * as enzyme from 'enzyme';
import List from './List';

it('list has one input', () => {
  const list = enzyme.shallow(<List/>);
  expect(list.find('input')).toBeTruthy();
});