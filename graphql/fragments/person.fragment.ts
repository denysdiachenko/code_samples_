import { gql } from '@apollo/client';

export const PERSON_FRAGMENT = gql`
  fragment PersonFragment on Person {
    id
    name
    gender
    homeworld {
        name
    }
    skinColor
  }
`;
