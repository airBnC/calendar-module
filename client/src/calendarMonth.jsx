import React from 'react';
import $ from 'jquery';
import CalendarDay from './calendarDay.jsx';
import styled from 'styled-components';

const Table = styled.div`
  display:flex;
  flex-flow:column;
  justify-content: center;
  align-items: center;
  height:85%;
  width:90%;
`;

const Thead = styled.div`
  display:flex;
  flex-flow:row;
  justify-content: center;
  align-items: center;
  height:5%;
  width:100%;
`;

const Tbody = styled.div`
  height:95%;
  width:100%;
  display:flex;
  flex-flow:column;
  justify-content: center;
  align-items: center;
`;

const Tr = styled.div`
  height:15%;
  width:100%;
  display:flex;
  flex-flow:row;
  justify-content: center;
  align-items: center;
`;

const Th = styled.div`
  height:100%;
  width:14%;
  text-align:center;
`;

class CalendarMonth extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <Table>
          <Thead>
            <Tr>
              <Th>Sun</Th>
              <Th>Mon</Th>
              <Th>Tues</Th>
              <Th>Weds</Th>
              <Th>Thurs</Th>
              <Th>Fri</Th>
              <Th>Sat</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </Tr>
            <Tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </Tr>
            <Tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </Tr>
            <Tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </Tr>
            <Tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </Tr>
            <Tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </Tr>
          </Tbody>
      </Table>
    )
  }
};

module.exports = CalendarMonth;