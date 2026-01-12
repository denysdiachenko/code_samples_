import { View } from 'react-native';
import AppText from '@/components/AppText/AppText';
import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import type IPeopleProps from './interfaces/IPeopleProps';
import getStyles from './styles';

function People({ data }: IPeopleProps) {
  const theme = useAppSelector(selectCurrentTheme);
  const styles = getStyles({ theme });

  const property = [
    {
      label: 'Name',
      value: data?.name,
    },
    {
      label: 'Gender',
      value: data?.gender || 'N/A',
    },
    {
      label: 'Homeworld',
      value: data?.homeworld?.name || 'N/A',
    },
  ];

  return (
    <View style={styles.container}>
      {property?.map(({ label, value }) => (
        <View
          style={styles.row}
          key={label}
        >
          <AppText>{label}:</AppText>
          <AppText>{value}</AppText>
        </View>
      ))}
    </View>
  );
}
export default People;
