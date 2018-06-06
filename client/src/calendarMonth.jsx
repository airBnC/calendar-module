import React from 'react';
import $ from 'jquery';
import CalendarDay from './calendarDay.jsx';

class CalendarMonth extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <table>
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tues</th>
              <th>Weds</th>
              <th>Thurs</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </tr>
            <tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </tr>
            <tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </tr>
            <tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </tr>
            <tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </tr>
            <tr>
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
                <CalendarDay />
            </tr>
          </tbody>
      </table>
    )
  }
};

module.exports = CalendarMonth;