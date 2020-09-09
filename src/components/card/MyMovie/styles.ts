import styled from '@emotion/styled';
import { ButtonColor } from 'styles/color';
import { defaultBorder } from 'styles/common';
import { NavBarColor } from 'styles/color';

export const Container = styled.div`
  border-radius: ${defaultBorder};
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  display: block;
`;

export const Time = styled.div`
  font-size: 15px;
  color: grey;
  top: 10px;
  left: 10px;
`;

export const Ranking = styled.div`
  font-size: 55px;
  color: white;
  text-shadow: 1px 1px 1px gray;
  // position: absolute;
  top: 10px;
  left: 10px;
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

export const Title = styled.div`
  color: white;
  font-size: 16px;
  margin: 10px auto 3px 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Col = styled.div`
  color: white;
  flex-basis: 30%;
  display: block; 
  color: grey;
  margin: 5px auto 3px 10px;
  // height: 10px;
  // font-size: 13px;
  font-size: 13px;
  font-style: normal;
  line-height: 1.58;
  justify-content: flex-start;
`;

export const Data = styled.div`
  color: white;
  flex-shrink: 0;
  margin-left: auto;
  justify-content: flex-end;
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
      color: white;
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
  color: white;
  opacity: 0.6;
  font-size: 14px;
  margin: 0 auto auto 20px;
`;

//background-color: ${ButtonColor.RESERVATION};
export const ButtonContainer = styled.div`
  border: 1px solid white;
  position: absolute;
  display: flex;
  width: 90%;
  height: 41px;
  top: 220px;
  transform: translateY(-50%);
  right: 20px;
  font-color: white;
`;

export const Button = styled.div`
  font-size: 14px;
  color: #2E64FE;
  text-shadow: 1px 1px 1px #blue-grey;
  width: 100%;
  text-align: center;
  margin-top: 7px;
`;