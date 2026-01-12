import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme }: { theme?: ColorSchemeName }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors[theme ?? 'light'].background,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 16,
    },
    listStyle: {
      width: '100%',
      paddingHorizontal: 20,
    },
    listContainer: {
      gap: 16,
    },
  });

export default getStyles;
