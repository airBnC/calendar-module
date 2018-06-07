import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const Td = styled.div`
 /* height:100%;
  width:14%;*/
  border:1px solid black;
  height:90%;
  width:90%;
`;


class CalendarDay extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Td id='calendarDay'>

      </Td>
    )
  }
};

module.exports = CalendarDay;