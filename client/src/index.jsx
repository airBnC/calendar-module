import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ArrowPrev from './arrowPrev.jsx';
import ArrowAfter from './arrowAfter.jsx';
import DateBanner from './dateBanner.jsx';
import CalendarMonth from './calendarMonth.jsx';
// import data from './dummy_data.js';


class App extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div id='calendar'>
        <div id='nav'>
          <ArrowPrev />
          <DateBanner />
          <ArrowAfter />
        </div>
        <CalendarMonth />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
