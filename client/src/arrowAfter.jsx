import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import arrow from '../../img/arrow.png';

const Div = styled.div`
  &:hover {
    opacity: 1;
  }
  border:1px solid grey;
  width:14%;
  height:90%;
  background-image:url(${arrow});
  background-size: 75% 75%;
  background-repeat: no-repeat;
  border-radius: 3px;
  background-position: 50% 50%;
  opacity: .6;
  margin-bottom: 5px;
  transform: rotate(180deg);
`;

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
        <Div onClick={this.clickHandler} />
    )
  }
};

module.exports = ArrowAfter;
