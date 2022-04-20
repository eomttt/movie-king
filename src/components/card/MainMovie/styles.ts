import styled from '@emotion/styled';
import { ButtonColor, FontColor } from 'styles/color';
import { defaultBorder, getTextLineStyle } from 'styles/common';

export const Container = styled.div`
  border-radius: ${defaultBorder};
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  & img {
    width: 100%;
    display: block;
  }
`;

export const Ranking = styled.div`
  font-size: 55px;
  color: ${FontColor.POINT};
  text-shadow: 1px 1px 1px gray;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Menu = styled.div`
  position: absolute;
  width: 100%;
  height: 68px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Title = styled.p`
  color: ${FontColor.POINT};
  font-size: 24px;
  font-weight: bold;
  margin: auto auto auto 20px;
  text-shadow: 1px 1px 2px gray;
  margin-left: 10px;
  ${getTextLineStyle(1)}
`;

export const Rating = styled.div`
  color: ${FontColor.POINT};
  opacity: 0.6;
  font-size: 14px;
  margin: 0 auto auto 20px;
`;

export const ButtonContainer = styled.button`
  cursor: pointer;
  background-color: ${ButtonColor.RESERVATION};
  display: flex;
  width: 77px;
  height: 30px;
  border-radius: ${defaultBorder};
  margin: 0 10px 0 5px;
  & > p {
    width: 100%;
    text-align: center;
    margin-top: 7px;
  }
`;
