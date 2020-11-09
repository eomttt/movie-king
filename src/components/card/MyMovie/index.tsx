import { IMyMovieCard } from 'interfaces/card';
import { getNumberWithComma } from 'lib/utils/common';
import DateFormat from 'lib/utils/DateFormat';
import React, { useMemo } from 'react';
import * as Styles from './styles';

interface MyMovieProps {
  movieCard: IMyMovieCard;
}

const Button = () => (
  <Styles.ButtonContainer>
    <Styles.Button>취소하기</Styles.Button>
  </Styles.ButtonContainer>
);

const MyMovie: React.FunctionComponent<MyMovieProps> = ({
  movieCard,
}) => {
  const {
    title, startDate, startTime, runningTime, location, audiences, fare,
  } = movieCard;
  const seatText = useMemo(() => audiences.map(audience => audience.seat).join(','), [audiences]);
  const [month, day] = useMemo(() => startDate.split(':'), [startDate]);
  const isToday = useMemo(() => DateFormat.isToday(Number(month), Number(day)), [month, day]);
  const reservationDate = useMemo(() => (isToday ? `오늘 ${startTime}` : `${startDate} ${startTime}`), [startTime, startDate]);

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Menu>
          <Styles.MenuContent>
            <Styles.Time>{reservationDate}</Styles.Time>
            <Styles.Wrapper>
              <Styles.Title>{title}</Styles.Title>
              <Styles.Row>
                <Styles.Col>상영시간</Styles.Col>
                <Styles.Data>{`${runningTime}분`}</Styles.Data>
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
                <Styles.Data>{`${getNumberWithComma(fare)}원`}</Styles.Data>
              </Styles.Row>
            </Styles.Wrapper>
            <Button />
          </Styles.MenuContent>
        </Styles.Menu>
      </Styles.Content>
    </Styles.Container>
  );
};

export default MyMovie;
