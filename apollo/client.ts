import { ApolloClient, HttpLink } from '@apollo/client';
import { cache } from '@/apollo/cache';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process?.env?.EXPO_PUBLIC_APOLLO_URL,
    // Force proper headers and simple GET requests for queries to avoid body parsing issues
    headers: { 'content-type': 'application/json' },
    useGETForQueries: true,
  }),
  cache,
});

export default client;
