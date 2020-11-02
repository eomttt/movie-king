import styled from '@emotion/styled';
import { ButtonColor, FontColor, NavBarColor } from 'styles/color';
import { defaultBorder } from 'styles/common';

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
  height: 277px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${NavBarColor};
`;

export const Time = styled.div`
  display: flex;
  height: 20px;
  margin-top: 20px;
  margin-left: 13px;
  font-size: 16px;
  opacity: 0.6;
  margin-bottom: 0.5px;
  color: ${FontColor.POINT};
  vertical-align: top;
`;

export const Wrapper = styled.div`
  margin-left: 15px;
`;

export const Title = styled.div`
  display: flex;
  margin-top: 10px;
  max-width: 100%px;
  width: 100%;
  height: 24px;
  opacity: 0.87;
  font-size: 20px;
  color: ${FontColor.POINT};
  margin-bottom: 0.5px;
  letter-spacing: -0.83pt;
  vertical-align: top;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 5px;
  font-size: 15px;
`;

export const Col = styled.div`
  color: ${FontColor.POINT};
  opacity: 0.6;
  flex-basis: 72px;
  display: block;
  font-style: normal;
`;

export const Data = styled.div`
  color: ${FontColor.POINT};
  right: 20px;
  opacity: 0.87;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 50px;
  text-align: center;
  margin-top: 11px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Button = styled.div`
  font-size: 18px;
  color: ${ButtonColor.RESERVATION};
  width: 100%;
  height: 21px;
  text-align: center;
  padding: 14px;
  letter-spacing: 0px;
  vertical-align: top;
`;
