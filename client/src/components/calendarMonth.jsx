import React from 'react';
import $ from 'jquery';
import CalendarDay from './calendarDay.jsx';
import { DivMonth } from '../styles/styles.jsx';
import { Wrap } from '../styles/styles.jsx';
import { HeadWrap } from '../styles/styles.jsx';
import { Span } from '../styles/styles.jsx';


class CalendarMonth extends React.Component {
  
  constructor(props) {
    super(props);
    this.limit = 42;
  }

  render() {
    return (
      <Wrap>  
        <HeadWrap>
          <Span>Sun</Span>
          <Span>Mon</Span>
          <Span>Tues</Span>
          <Span>Weds</Span>
          <Span>Thurs</Span>
          <Span>Fri</Span>
          <Span>Sat</Span>
        </HeadWrap>
        <DivMonth>
          { Array.from({ length: this.limit }, (v, i) => i).map((item, i) => {
            { var actualDate = this.props.currentData.day + (this.props.currentData.beginning) - 1 }
            { var start = this.props.currentData.beginning }
            { var startOffSet = (i - this.props.currentData.beginning) + 1 }
            { 
              if (this.props.currentData.daysOpen !== undefined) {
                var costAvail =  Array.prototype.indexOf.call(this.props.currentData.daysOpen, startOffSet) !== -1 ? this.props.currentData.cost : '';
              }
            }
            if (i >= start && i <= actualDate) {
              return <CalendarDay key={ i } day={ startOffSet } cost={ costAvail } />
            } else {
              return <CalendarDay key={ i } />
            }
           })
          }
        </DivMonth>
      </Wrap>
    )
  };
};

module.exports = CalendarMonth;
