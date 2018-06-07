import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ArrowPrev from './arrowPrev.jsx';
import ArrowAfter from './arrowAfter.jsx';
import DateBanner from './dateBanner.jsx';
import CalendarMonth from './calendarMonth.jsx';
import styled from 'styled-components';
// import data from './dummy_data.js';

const DivCalendar = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-flow:column;
  justify-content: center;
  align-items: center;
`;

const DivNav = styled.div`
  display:flex;
  flex-flow:row;
  justify-content: center;
  align-items: center;
  border:1px solid black;
  height:15%;
  width:90%;
`;

class App extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <DivCalendar>
        <DivNav>
          <ArrowPrev />
          <DateBanner />
          <ArrowAfter />
        </DivNav>
        <CalendarMonth />
      </DivCalendar>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
