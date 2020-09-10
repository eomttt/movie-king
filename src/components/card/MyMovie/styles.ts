import styled from '@emotion/styled';
import { ButtonColor } from 'styles/color';
import { defaultBorder } from 'styles/common';
import { NavBarColor } from 'styles/color';

export const Container = styled.div`
  border-radius: ${defaultBorder};
  overflow: hidden;
  * {
    font-family: Apple SD 산돌고딕 Neo 일반체;
    letter-spacing: -1px;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 255px;
  display: block;
`;

export const Menu = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${NavBarColor} !important;
`;

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Time = styled.div`
  display: flex;
  font-size: 15px;
  color: grey;
  margin-left: 7px;
  margin-top: 16px;
`;

export const Title = styled.div`
  color: #BDBDBD;
  font-size: 16px;
  margin: 10px auto 3px 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 5px;
`;

export const Col = styled.div`
  color: #A4A4A4;
  flex-basis: 20%;
  display: block; 
  color: grey;
  margin-left: 10px;
  // margin: 5px auto 3px 10px;
  // height: 10px;
  // font-size: 13px;
  font-size: 13px;
  font-style: normal;
  // line-height: 1.58;
  // justify-content: flex-start;
`;

export const Data = styled.div`
  color: #A4A4A4;
  right: 80%
  margin-left: 5px;
  text-align: left;
  flex-shrink: 0;
  // justify-content: flex-end;
  font-size: 13px;
  font-style: normal;
`;

export const Table = styled.table`
  display:flex;
  display: -webkit-box;
  display: -ms-flexbox;
  overflow-x: auto;
  overflow-y: hidden;
  font-size: 12px;
  margin: 10px auto 3px 10px;
  flex-direction: column;
  & tbody {
    display:flex
  },
  & tr {
    display: block; float: left;
    text-align: left;
    & th {
      text-indent: 0px;
      display: block; 
      color: grey;
    },
    & td {
      text-indent: 20px;
      display: block; 
      color: #A4A4A4;
    }
  },
`;


export const Tbody = styled.tbody`
  display:flex
  & tr {
    & td {
      text-indent: 50px;
    }
  }
`;

export const TR = styled.tr`
  display: block; float: left;
`;


export const RunningTime = styled.div`
  color: #A4A4A4;
  opacity: 0.6;
  font-size: 14px;
  margin: 0 auto auto 20px;
`;

//background-color: ${ButtonColor.RESERVATION};
export const ButtonContainer = styled.div`
  position: absolute;
  top: 51%;
  left: 2%;
  right: 2%;
  border: 1px solid grey;
  //display: flex;
  width: 96%;
  height: 41px;
  justify-content: center;
  vertical-align: middle
  // transform: translateY(-50%);
  max-width: 100%;
  font-color: #A4A4A4;
`;

export const Button = styled.div`
  font-size: 14px;
  color: ${ButtonColor.RESERVATION};
  width: 100%;
  text-align: center;
  margin-top: 10px;
`;