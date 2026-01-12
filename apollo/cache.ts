import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allPeople: {
          keyArgs: false,
          merge(existing = { edges: [] }, incoming) {
            const existingEdges = existing?.edges ?? [];
            const incomingEdges = incoming?.edges ?? [];

            // Simple append; server provides stable cursors
            const mergedEdges = [...existingEdges, ...incomingEdges];

            return {
              ...incoming,
              edges: mergedEdges,
            };
          },
        },
        posts: {
          keyArgs: false,
          merge(existing = { edges: [] }, incoming) {
            return {
              ...incoming,
              edges: [...existing.edges, ...incoming.edges],
            };
          },
        },
      },
    },
  },
});
