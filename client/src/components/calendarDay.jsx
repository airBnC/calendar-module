import React from 'react';
import { RegularDay } from '../styles/styles.jsx';
import { AvailableDay } from '../styles/styles.jsx';
import { EmptyDay } from '../styles/styles.jsx';
import { Div } from '../styles/styles.jsx';

class CalendarDay extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    if( this.props.day && this.props.cost === undefined || this.props.cost === '' ){
      return (
        <RegularDay>
          <Div>
            {  this.props.day }
          </Div>
          <div>
            {  this.props.cost === undefined || this.props.cost === '' ? '' : '$'+this.props.cost  }
          </div>
        </RegularDay>
      )
    } else if (this.props.day === undefined && this.props.cost === undefined || this.props.cost === '' ) {
      return (
        <EmptyDay>
          <Div>
            {  this.props.day }
          </Div>
          <div>
            {  this.props.cost === undefined || this.props.cost === '' ? '' : '$'+this.props.cost  }
          </div>
        </EmptyDay>
      )
    } else {
      return (
        <AvailableDay>
          <Div>
            {  this.props.day }
          </Div>
          <div>
            {  this.props.cost === undefined || this.props.cost === '' ? '' : '$'+this.props.cost  }
          </div>
        </AvailableDay>
      )
    }
  }
};

module.exports = CalendarDay;







