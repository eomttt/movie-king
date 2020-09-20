import { gql } from 'apollo-boost';

export const GET_TIMETABLE_QUERY = gql`
  query TimeTable($type: String!, $link: String!) {
    timeTable(type: $type, theaterLink: $link) {
      title
      timeInfo {
        time
      }
    }
  }
`;
