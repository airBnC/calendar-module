import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ArrowPrev from './arrowPrev.jsx';
import ArrowAfter from './arrowAfter.jsx';
import DateBanner from './dateBanner.jsx';
import CalendarMonth from './calendarMonth.jsx';
import styled from 'styled-components';
import data from '../../dataBase/dummyData.js';
import axios from 'axios';

const DivCalendar = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-flow:column;
  align-items: center;
`;

const DivNav = styled.div`
  display:flex;
  flex-flow:row;
  justify-content: center;
  align-items: center;
  height:15%;
  width:90%;
`;

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
    axios.get('/calendar/'+window.location.pathname.replace(/\/calendar\//,'').replace(/\//,'')).then(function(response){
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
        <CalendarMonth data={this.state.data} currentData={this.state.currentData} />
      </DivCalendar>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
