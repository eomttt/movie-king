import { gql } from 'apollo-boost';

export const GET_BOXOFFICE_QUERY = gql`
{
  boxOffice {
    image
    title
  }
}
`;
