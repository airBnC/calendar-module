import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';
import BG from './stripedBG.jpeg';

const Span = styled.span`
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

const Else = styled.span`
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

const ElseIf = styled.span`
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
        <Span>
          <Div>
            {  this.props.day }
          </Div>
          <div>
            {  this.props.cost === undefined || this.props.cost === '' ? '' : '$'+this.props.cost  }
          </div>
        </Span>
      )
    } else if (this.props.day === undefined && this.props.cost === undefined || this.props.cost === '' ) {
      return (
        <ElseIf>
          <Div>
            {  this.props.day }
          </Div>
          <div>
            {  this.props.cost === undefined || this.props.cost === '' ? '' : '$'+this.props.cost  }
          </div>
        </ElseIf>
      )
    } else {
      return (
        <Else>
          <Div>
            {  this.props.day }
          </Div>
          <div>
            {  this.props.cost === undefined || this.props.cost === '' ? '' : '$'+this.props.cost  }
          </div>
        </Else>
      )
    }
  }
};

module.exports = CalendarDay;







