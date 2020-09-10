import styled from '@emotion/styled';
import { ButtonColor } from 'styles/color';
import { defaultBorder } from 'styles/common';
import { NavBarColor } from 'styles/color';
import { FontColor } from 'styles/color';

export const Container = styled.div`
  width: 100%;  
  border-radius: ${defaultBorder};
  overflow: hidden;
  letter-spacing: -1px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${NavBarColor};
`;

export const Menu = styled.div`
  width: 100%;
  background-color: ${NavBarColor};
`;

export const MenuContent = styled.div`
  x-index: 0px;
  y-index: 70px;
  height: 277px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${NavBarColor};
`;

export const Time = styled.div`
  display: flex;
  height: 20px;
  x-index: 13px;
  y-index: 90px;
  margin-top: 20px;
  margin-left: 13px;
  font-size: 16px;
  opacity: 0.60;
  margin-bottom: 0.5px;
  color: ${FontColor['POINT']};
  vertical-align: top;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 327px;
  x-index: 15px;
  y-index: 120px;
  width: 100%;
  height: 24px;
  opacity: 0.87;
  font-size: 20px;
  color: ${FontColor['POINT']};
  margin-bottom: 0.5px;
  letter-spacing: -0.83pt;
  vertical-align: top;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 5px;
`;

export const Col = styled.div`
  color: ${FontColor['POINT']};
  opacity: 0.6;
  flex-basis: 72px;
  display: block; 
  margin-left: 15px;
  font-size: 15px;
  font-style: normal;
`;

export const Data = styled.div`
  color: ${FontColor['POINT']};
  right: 20px;
  opacity: 0.87;
  font-size: 15px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 325px;
  height: 50px;
  text-align: center;
  margin-top: 210px;
  margin-left: 15px;
  // margin-right: 10px;
`;

export const Button = styled.div`
  font-size: 18px;
  color: ${ButtonColor.RESERVATION};
  width: 347px;
  height: 21px;
  text-align: center;
  margin-top: 14px;
  letter-spacing: 0px;
  vertical-align: top;
`;