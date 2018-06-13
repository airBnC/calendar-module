import React from 'react';
import { DivArrowAfter } from '../styles/styles.jsx';

class ArrowAfter extends React.Component {
  
  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
     var monthIs = (this.props.state + 1) < 12 ? this.props.state + 1 : 11;
     this.props.changeMonth(monthIs);
   }


  render() {
    return (
        <DivArrowAfter onClick={this.clickHandler} />
    )
  }
};

module.exports = ArrowAfter;
