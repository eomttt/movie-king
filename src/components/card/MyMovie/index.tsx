import { IMyMovieCard } from 'interfaces/card';
import React from 'react';
import * as Styles from './styles';

const MyMovie: React.FunctionComponent<IMyMovieCard> = ({
  id,
  title,
  runningtime,
  time,
  location,
  audiences,
  fare
}) => {
  const seatText = audiences.reduce((acc, cur, index) => {
    const isLast = index === audiences.length - 1;
    return `${acc}${cur['seat']}${isLast ? '' : ', '}`
  }, '');
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Menu>
          <Styles.MenuContent>
            <Styles.Time>{runningtime}</Styles.Time>
            <Styles.Title>{title}</Styles.Title>
            <Styles.Row>
              <Styles.Col>상영시간</Styles.Col>
              <Styles.Data>{time}분</Styles.Data>
            </Styles.Row>
            <Styles.Row>
              <Styles.Col>상영관</Styles.Col>
              <Styles.Data>{location}</Styles.Data>
            </Styles.Row>
            <Styles.Row>
              <Styles.Col>관람인원</Styles.Col>
              <Styles.Data>{audiences.length}명</Styles.Data>
            </Styles.Row>
            <Styles.Row>
              <Styles.Col>좌석</Styles.Col>
              <Styles.Data>{seatText}</Styles.Data>
            </Styles.Row>
            <Styles.Row>
              <Styles.Col>결제금액</Styles.Col>
              <Styles.Data>{fare}원</Styles.Data>
            </Styles.Row>
            <Styles.ButtonContainer>
              <Styles.Button>취소하기</Styles.Button>
            </Styles.ButtonContainer>
          </Styles.MenuContent>
        </Styles.Menu>
      </Styles.Content>
    </Styles.Container>
  )
};

export default MyMovie;
