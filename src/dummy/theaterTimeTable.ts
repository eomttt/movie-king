import { TimeTable } from 'interfaces/timeTable';

const datam: { timeTable: TimeTable[] } = {
  timeTable: [
    {
      title: '에이비',
      image: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79273/79273_1000.jpg',
      timeInfo: [{ time: '13:40' }, { time: '17:50' }, { time: '22:00' }],
    },
    {
      image: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84192/84192_1000.jpg',
      title: '테넷',
      timeInfo: [
        { time: '15:40' },
        { time: '17:50' },
        { time: '22:00' },
        { time: '23:30' },
      ],
    },
    {
      image: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000083/83963/83963_1000.jpg',
      title: '오! 문희',
      timeInfo: [
        { time: '12:40' },
        { time: '14:50' },
        { time: '16:10' },
        { time: '17:30' },
        { time: '18:10' },
        { time: '19:30' },
      ],
    },
    {
      image: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000077/77772/77772_1000.jpg',
      title: '뉴 뮤턴트',
      timeInfo: [{ time: '12: 40' }, { time: '17: 50' }, { time: '22:00' }],
    },
    {
      image: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84172/84172_1000.jpg',
      title: '다만 악에서 구하소서',
      timeInfo: [{ time: '16: 40' }],
    },
  ],
};

export default datam;
