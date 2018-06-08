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
    return(
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
          {Array.from({length: this.limit}, (v, i) => i).map((item, i) =>{
            if(i >= this.props.currentData.beginning && i <= this.props.currentData.day + (this.props.currentData.beginning) - 1){
              return <CalendarDay key={i} day={(i - this.props.currentData.beginning) + 1} />
            }else{
              return <CalendarDay key={i} />
            }
         })}
        </Div>
      </Wrap>
    )
  }
};

module.exports = CalendarMonth;