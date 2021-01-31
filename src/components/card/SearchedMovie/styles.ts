import styled from '@emotion/styled';
import { FontColor, BackgroundColor } from 'styles/color';
import { defaultBorder } from 'styles/common';

export const Container = styled.div`
  border-radius: ${defaultBorder};
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  & img {
    width: 40%;
    display: block;
  }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
`;

export const MenuContent = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 10px;
`;

const MovieText = styled.div`
  color: ${FontColor.POINT};
  font-size: 12px;
  text-shadow: 1px 1px 1px ${BackgroundColor};
`;

export const TheaterInfo = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const TheaterType = styled(MovieText)`
  color: ${(props) => props.color};
`;

export const MovieLocation = styled(MovieText)`
  margin-left: 10px;
  font-size: 15px;
`;

export const MovieTitle = styled(MovieText)`
  font-size: 20px;
  margin-bottom: 5px;
  word-break: break-all;
`;

export const MovieTime = styled(MovieText)`
  font-size: 18px;
`;
