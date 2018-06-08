import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const Span = styled.span`
  height:120%;
  width:13%;
  border:1px solid black;
  
`;


class CalendarDay extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Span>
          {this.props.day}
          {this.props.cost}
        </Span>
    )
  }
};

module.exports = CalendarDay;