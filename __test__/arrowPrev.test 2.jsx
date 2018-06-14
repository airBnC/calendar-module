import React, { Component } from 'react';
import ArrowPrev from '../client/src/components/arrowPrev.jsx';
import styled from 'styled-components';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const thisMonth = 6;
const monthChanged = function(){
	alert('Hello World!!');
}
describe('CalendarMonth', () => {
  it('should render correctly', () => {
    const output = shallow(
      <ArrowPrev state={thisMonth} monthChanged={monthChanged} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});