import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ArrowPrev from './components/arrowPrev.jsx';
import ArrowAfter from './components/arrowAfter.jsx';
import DateBanner from './components/dateBanner.jsx';
import CalendarMonth from './components/calendarMonth.jsx';
import data from '../../dataBase/dummyData.js';
import axios from 'axios';
import { DivCalendar } from './styles/styles.jsx';
import { DivNav } from './styles/styles.jsx';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      currentData: '',
      thisMonth: 5,
      year: ''
    }
  }

  changeMonth(month){
    this.setState({
      thisMonth: month,
      currentData: this.state.year[month]
    })
  }

  componentDidMount(){
    var that = this;
    var obj = {number : window.location.pathname.replace(/\/rooms/gi,'').replace(/\//g,'')}
    axios.post('/rooms',obj).then(function(response){
      that.setState({
        currentData: JSON.parse(response.data[0].year)[that.state.thisMonth],
        year:  JSON.parse(response.data[0].year)
      })
    }).catch(function(response){
      console.log(response)
    })
  }

  render() {
    return(
      <DivCalendar>
        <DivNav>
          <ArrowPrev state={this.state.thisMonth} changeMonth={this.changeMonth.bind(this)} />
          <DateBanner currentData={this.state.currentData} />
          <ArrowAfter state={this.state.thisMonth} changeMonth={this.changeMonth.bind(this)} />
        </DivNav>
        <CalendarMonth currentData={this.state.currentData} />
      </DivCalendar>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
