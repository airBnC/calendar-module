import React, { Component } from 'react';
import DateBanner from '../client/src/components/dateBanner.jsx';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
const currentData = {
	month: 'July',
	year: 18
}
describe('CalendarMonth', () => {
  it('should render correctly', () => {
    const output = shallow(
      <DateBanner currentData={currentData} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
 
});