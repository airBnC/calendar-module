import React, { Component } from 'react';
import ArrowAfter from '../client/src/components/arrowAfter.jsx';
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
      <ArrowAfter currentData={thisMonth} changeMonth={monthChanged} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
 
});