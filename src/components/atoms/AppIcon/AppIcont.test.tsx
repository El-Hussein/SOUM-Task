import {render} from '@testing-library/react-native';
import AppIcon, {AppIconType} from '.';

describe('AppIcon', () => {
  test('it should have MaterialIcon rendered if type passed AppIconType.MATERIAL', () => {
    const {getByTestId} = render(
      <AppIcon name="accessibility" type={AppIconType.MATERIAL} />,
    );
    expect(getByTestId('MaterialIcons')).toBeTruthy();
  });
  test('it should have FontAwesome rendered if type passed AppIconType.FONT_AWESOME', () => {
    const {getByTestId} = render(
      <AppIcon name="adjust" type={AppIconType.FONT_AWESOME} />,
    );
    expect(getByTestId('FontAwesome')).toBeTruthy();
  });
  test('it should have FontAwesome5 rendered if type passed AppIconType.FONT_AWESOME5', () => {
    const {getByTestId} = render(
      <AppIcon name="adjust" type={AppIconType.FONT_AWESOME5} />,
    );
    expect(getByTestId('FontAwesome5')).toBeTruthy();
  });
  test('it should have Ionicons rendered if type passed AppIconType.IONICONS', () => {
    const {getByTestId} = render(
      <AppIcon name="accessibility" type={AppIconType.IONICONS} />,
    );
    expect(getByTestId('Ionicons')).toBeTruthy();
  });
  test('it should have MaterialCommunityIcons rendered if type passed AppIconType.MATERIAL_COMMUNITY', () => {
    const {getByTestId} = render(
      <AppIcon name="account" type={AppIconType.MATERIAL_COMMUNITY} />,
    );
    expect(getByTestId('MaterialCommunityIcons')).toBeTruthy();
  });
  test('it should have Fontisto rendered if type passed AppIconType.FONTISTO', () => {
    const {getByTestId} = render(
      <AppIcon name="star" type={AppIconType.FONTISTO} />,
    );
    expect(getByTestId('Fontisto')).toBeTruthy();
  });
  test('it should have FontAwesome rendered if type not passed', () => {
    const {getByTestId} = render(<AppIcon name="adjust" />);
    expect(getByTestId('FontAwesome')).toBeTruthy();
  });
});
