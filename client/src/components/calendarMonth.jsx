import React from 'react';
import $ from 'jquery';
import CalendarDay from './calendarDay.jsx';
import styled from 'styled-components';

const Div = styled.div`
  display:flex;
  flex-flow:row wrap;
  height:30px;
  width:100%;
  border:none;

`;

const Wrap = styled.div`
  display:flex;
  flex-flow:column;
  height:90%;
  width:100%;
  padding-left: 6%;
`;

const HeadWrap = styled.div`
  display:flex;
  flex-flow:row;
  height:10%;
  width:94%;
`;

const Span = styled.span`
  height:10%;
  width:100%;
  text-align:center;
`;

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
        <Div>
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
        </Div>
      </Wrap>
    )
  };
};

module.exports = CalendarMonth;































