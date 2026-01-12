import { useQuery } from '@apollo/client/react';
import { FlatList, View } from 'react-native';
import People from '@/components/People/People';
import { testIdHomePage } from '@/constants/TestId';
import type { PersonsQuery, PersonsQueryVariables } from '@/graphql/types/personsQuery';
import { PERSONS_QUERY } from '@/graphql/users/persons.query';
import type { IPerson } from '@/interfaces/IPerson';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import getStyles from './styles';

export default function HomeScreen() {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });
  const { data, fetchMore } = useQuery<PersonsQuery, PersonsQueryVariables>(PERSONS_QUERY, {
    variables: { first: 10, after: null },
    fetchPolicy: 'cache-and-network',
  });

  const persons = data?.allPeople?.edges?.map((i) => i.node);

  return (
    <View
      style={styles.container}
      testID={testIdHomePage}
    >
      <FlatList<IPerson>
        data={persons}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => <People data={item} />}
        style={styles.listStyle}
        contentContainerStyle={styles.listContainer}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (data?.allPeople?.pageInfo?.hasNextPage) {
            fetchMore({
              variables: {
                after: data.allPeople.pageInfo.endCursor,
              },
            });
          }
        }}
      />
    </View>
  );
}
