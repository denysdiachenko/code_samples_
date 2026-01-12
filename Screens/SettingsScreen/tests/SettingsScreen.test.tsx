import { fireEvent, waitFor } from '@testing-library/react-native';
import { render } from '@/__tests__/test-utils';
import Colors from '@/constants/Colors';
import { testIdAppSwitch, testIdSettingPage } from '@/constants/TestId';
import SettingsScreen from '../SettingsScreen';

describe('<SettingsScreen />', () => {
  test('should render component SettingsScreen', () => {
    const tree = render(<SettingsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('AppSwitch should change theme', () => {
    const {
      getByTestId,
      store: { getState },
    } = render(<SettingsScreen />);
    const appSwitch = getByTestId(testIdAppSwitch);
    const initScreenStyles = getByTestId(testIdSettingPage).props.style;

    expect(initScreenStyles.backgroundColor).toBe(Colors[getState().theme.theme].background);

    expect(appSwitch).toBeDefined();

    waitFor(() => {
      fireEvent(appSwitch, 'onValueChange');
    });

    const updatedScreenStyles = getByTestId(testIdSettingPage).props.style;

    expect(updatedScreenStyles.backgroundColor).toBe(Colors[getState().theme.theme].background);
  });
});
