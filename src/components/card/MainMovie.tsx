import React from 'react';

import styled from 'styled-components';

import { reservationButtonColor, defaultBorder } from '@styles/common';

import { IMovieCard } from '@interfaces/card';

interface IProps extends IMovieCard {
  rank: number;
}

const Container = styled.div`
  border-radius: ${defaultBorder};
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  & img {
    width: 100%;
    height: 436px;
    display: block;
  }
`;

const Ranking = styled.div`
  font-size: 55px;
  color: white;
  text-shadow: 1px 1px 1px gray;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Menu = styled.div`
  position: absolute;
  width: 100%;
  height: 68px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  color: white;
  font-size: 18px;
  margin: 15px auto 3px 20px;
`;

const Rating = styled.div`
  color: white;
  opacity: 0.6;
  font-size: 14px;
  margin: 0 auto auto 20px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  background-color: ${reservationButtonColor};
  display: flex;
  width: 77px;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: ${defaultBorder};
  right: 20px;
  & div {
    width: 100%;
    text-align: center;
    margin-top: 7px;
  }
`;

const MainMovie: React.FunctionComponent<IProps> = ({
  rank,
  image,
  title,
  rating,
}) => (
  <Container>
    <Content>
      <Ranking>
        {rank}
      </Ranking>
      <img src={image} alt="Movie" />
      <Menu>
        <MenuContent>
          <Title>{title}</Title>
          <Rating>{`* ${rating}`}</Rating>
          <ButtonContainer>
            <div>예매하기</div>
          </ButtonContainer>
        </MenuContent>
      </Menu>
    </Content>
  </Container>
);

export default MainMovie;
