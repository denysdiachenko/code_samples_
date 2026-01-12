import { StyleSheet } from 'react-native';

import type { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';

import Colors from '@/constants/Colors';

const getStyles = ({ theme }: { theme?: ColorSchemeName }) => {
  const palette = Colors[theme ?? 'light'];
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: palette.baseBorderColor,
      gap: 8,
    },
    row: {
      flexDirection: 'row',
      gap: 10,
    },
  });
};

export default getStyles;
