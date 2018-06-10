import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import BG from './stripedBG.jpeg';

const Span = styled.span`
  height:120%;
  width:13%;
  border:1px solid black;
  text-align:center;
  display: flex;
  flex-flow:column;
  font-size: 12px;
`;

const Div = styled.div`
  padding-top: 2px;
  font-weight: bolder;
  font-size: 14px;
  background-image:url(${BG});
`;

class CalendarDay extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Span>
          <Div>
            {  this.props.day }
          </Div>
          <div>
            {  this.props.cost === undefined || this.props.cost === '' ? '' : '$'+this.props.cost  }
          </div>
          
        </Span>
    )
  }
};

module.exports = CalendarDay;








