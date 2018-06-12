import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import BG from '../../../img/stripedBG.jpeg';

const RegularDay = styled.span`
  height:120%;
  width:13%;
  border:1px solid white;
  text-align:center;
  display: flex;
  flex-flow:column;
  font-size: 12px;
  background-image:url(${BG});
  background-size: 300% 300%;
  opacity: .3;
`;

const AvailableDay = styled.span`
  &:hover {
      background: #96eeee;
    }
  height:120%;
  width:13%;
  border:1px solid white;
  text-align:center;
  display: flex;
  flex-flow:column;
  font-size: 12px;
  background-color: #96eeee12;
  color:#2b9eb0;
`;

const EmptyDay = styled.span`
  height:120%;
  width:13%;
  border:1px solid white;
  text-align:center;
  display: flex;
  flex-flow:column;
  font-size: 12px;

`;

const Div = styled.div`
  padding-top: 2px;
  font-weight: bolder;
  font-size: 14px;
`;

class CalendarDay extends React.Component {
  
  constructor(props) {
    super(props)
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







