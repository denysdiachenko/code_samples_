import { gql } from '@apollo/client';
import { PERSON_FRAGMENT } from '@/graphql/fragments/person.fragment';

export const PERSONS_QUERY = gql`
    ${PERSON_FRAGMENT}
    query allPeople($first: Int, $after: String) {
        allPeople(first: $first, after: $after) {
            totalCount
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                cursor
                node {
                    ...PersonFragment
                }
            }
        }
    }
`;
