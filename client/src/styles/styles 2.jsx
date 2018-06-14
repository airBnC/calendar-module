import styled from 'styled-components';

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

const DivBanner = styled.div`
  width:72%;
  height:100%;
  display:flex;
  flex-flow:row;
  align-items: center;
  font-size: 22px;
  justify-content: center;
`;

const DivArrowAfter = styled.div`
  &:hover {
    opacity: 1;
  }
  border:1px solid grey;
  width:14%;
  height:90%;
  background-image:url('http://localhost:3001/rooms/00/arrow.png');
  background-size: 75% 75%;
  background-repeat: no-repeat;
  border-radius: 3px;
  background-position: 50% 50%;
  opacity: .6;
  margin-bottom: 5px;
  transform: rotate(180deg);
`;

const DivArrowPrev = styled.div`
  &:hover {
    opacity: 1;
  }
  border:1px solid grey;
  width:14%;
  height:90%;
  background-image:url('http://localhost:3001/rooms/00/arrow.png');
  background-size: 75% 75%;
  background-repeat: no-repeat;
  border-radius: 3px;
  background-position: 50% 50%;
  opacity: .6;
  margin-bottom: 5px;
`;

const RegularDay = styled.span`
  &:hover {
    opacity: 1;
  }
  height:120%;
  width:13%;
  border:1px solid white;
  text-align:center;
  display: flex;
  flex-flow:column;
  font-size: 12px;
  background-image:url('http://localhost:3001/rooms/00/stripedBG.jpeg');
  background-size: 300% 300%;
  opacity: .3;
`;

const AvailableDay = styled.span`
  
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

const DivMonth = styled.div`
  display:flex;
  flex-flow:row wrap;
  height:30px;
  width:100%;
  border:none;

`;

const Wrap = styled.div`
  display:flex;
  flex-flow:column;
  height:90%;
  width:100%;
  padding-left: 6%;
`;

const HeadWrap = styled.div`
  display:flex;
  flex-flow:row;
  height:10%;
  width:94%;
`;

const Span = styled.span`
  height:10%;
  width:100%;
  text-align:center;
`;


module.exports = {
  DivCalendar: DivCalendar,
  DivNav: DivNav,
  DivBanner: DivBanner,
  DivArrowAfter: DivArrowAfter,
  DivArrowPrev: DivArrowPrev,
  RegularDay: RegularDay,
  AvailableDay: AvailableDay,
  EmptyDay: EmptyDay,
  Div: Div,
  DivMonth: DivMonth,
  Wrap: Wrap,
  HeadWrap: HeadWrap,
  Span: Span
}


