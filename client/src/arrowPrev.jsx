import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const Div = styled.div`
  border:1px solid black;
  width:14%;
  height:100%;
`;

class ArrowPrev extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Div id='arrowPrev'>

      </Div>
    )
  }
};

module.exports = ArrowPrev;
