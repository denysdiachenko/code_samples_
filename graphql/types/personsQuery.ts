import type { IPerson } from '@/interfaces/IPerson';

export interface PersonsQuery {
  allPeople?: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
    edges: Array<{
      cursor: string;
      node: IPerson;
    }>;
  } | null;
}

export interface PersonsQueryVariables {
  first?: number | null;
  after?: string | null;
}
