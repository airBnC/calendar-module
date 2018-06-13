import React from 'react';
import $ from 'jquery';
import { DivBanner } from '../styles/styles.jsx';

class DateBanner extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <DivBanner>
          {this.props.currentData.month} 20{this.props.currentData.year}
      </DivBanner>
    )
  }
};

module.exports = DateBanner;