import React, { Component } from 'react';
import CalendarDay from '../client/src/components/calendarDay.jsx';
import styled from 'styled-components';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('CalendarDay', () => {
  it('should render correctly', () => {
    const output = shallow(
      <CalendarDay day={21} cost={666} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});