import { useEffect, useState } from 'react';
import { Appearance, View } from 'react-native';
import AppSwitch from '@/components/AppSwitch/AppSwitch';
import AppText from '@/components/AppText/AppText';
import getStyles from './styles';

import setColorScheme = Appearance.setColorScheme;

import { useTranslation } from 'react-i18next';

import LanguageSelector from '@/components/LanguageSelector/LanguageSelector';
import { testIdSettingPage } from '@/constants/TestId';
import Theme from '@/constants/Theme';
import { useAppDispatch, useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';
import { toggleTheme } from '@/store/slices/theme/slice';

export default function SettingsScreen() {
  const theme = useAppSelector(selectCurrentTheme);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [isEnabled, setIsEnabled] = useState(false);
  const styles = getStyles({ theme });

  useEffect(() => {
    setColorScheme?.(isEnabled ? Theme.dark : Theme.light);
  }, [isEnabled]);

  return (
    <View
      style={styles.container}
      testID={testIdSettingPage}
    >
      <View style={styles.switchContainer}>
        <AppSwitch
          toggleSwitch={(prop) => {
            setIsEnabled(prop);
            dispatch(toggleTheme());
          }}
          isEnabled={theme === Theme.dark}
        />
        <AppText>{t('settings.darkMode')}</AppText>
      </View>
      <LanguageSelector />
    </View>
  );
}
