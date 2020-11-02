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
  fare,
}) => {
  const seats = audiences.map(audience => audience.seat);
  const seatText = seats.join(', ');
  const month = (new Date().getMonth()+1).toString();
  const day = new Date().getDate().toString();
  const today = day.length === 1 ? month+'0'+day : month+day;
  let button;
  let runningTime = runningtime;
  if (runningtime.replace('/', '').substr(0,4) >= today) {
    button = 
      <Styles.ButtonContainer>
        <Styles.Button>취소하기</Styles.Button>
      </Styles.ButtonContainer>
    ;
    if (runningtime.replace('/', '').substr(0,4) === today) {
      runningTime = '오늘 ' + runningtime.slice(-5);
    }
  }
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Menu>
          <Styles.MenuContent>
            <Styles.Time>{runningTime}</Styles.Time>
            <Styles.Wrapper>
              <Styles.Title>{title}</Styles.Title>
              <Styles.Row>
                <Styles.Col>상영시간</Styles.Col>
                <Styles.Data>{`${time}분`}</Styles.Data>
              </Styles.Row>
              <Styles.Row>
                <Styles.Col>상영관</Styles.Col>
                <Styles.Data>{location}</Styles.Data>
              </Styles.Row>
              <Styles.Row>
                <Styles.Col>관람인원</Styles.Col>
                <Styles.Data>{`${audiences.length}명`}</Styles.Data>
              </Styles.Row>
              <Styles.Row>
                <Styles.Col>좌석</Styles.Col>
                <Styles.Data>{seatText}</Styles.Data>
              </Styles.Row>
              <Styles.Row>
                <Styles.Col>결제금액</Styles.Col>
                <Styles.Data>{`${fare}원`}</Styles.Data>
              </Styles.Row>
            </Styles.Wrapper>
            {button}
          </Styles.MenuContent>
        </Styles.Menu>
      </Styles.Content>
    </Styles.Container>
  );
};

export default MyMovie;
