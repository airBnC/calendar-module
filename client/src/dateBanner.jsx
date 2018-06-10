import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const Div = styled.div`
  width:72%;
  height:100%;
  display:flex;
  flex-flow:row;
  align-items: center;
  font-size: 22px;
  justify-content: center;
`;

class DateBanner extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Div>
          {this.props.currentData.month} 20{this.props.currentData.year}
      </Div>
    )
  }
};

module.exports = DateBanner;