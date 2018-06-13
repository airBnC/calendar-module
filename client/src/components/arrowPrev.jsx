import React from 'react';
import { DivArrowPrev } from '../styles/styles.jsx';

class ArrowPrev extends React.Component {

  constructor(props) {
    super(props)
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    var monthIs = (this.props.state - 1) > 0 ? this.props.state - 1 : 0;
    this.props.changeMonth(monthIs);
  }

  render() {
    return (
      <DivArrowPrev onClick={this.clickHandler} />
    )
  }
};

module.exports = ArrowPrev;


