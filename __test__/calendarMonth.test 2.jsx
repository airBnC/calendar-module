import React, { Component } from 'react';
import CalendarMonth from '../client/src/components/calendarMonth.jsx';
import styled from 'styled-components';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import CalendarDay from '../client/src/components/calendarDay.jsx';
const thisMonth = 6;
const monthChanged = {
	daysOpen: [1,2,3,5,6,7,8],
	beginning: 6,
	day: 31

}
describe('CalendarMonth', () => {
  it('should render correctly', () => {
    const output = shallow(
      <CalendarMonth currentData={monthChanged} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});