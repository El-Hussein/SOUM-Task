import {render} from '@testing-library/react-native';
import AppText from './AppText';

describe('<AppText />', () => {
  test('it should have text passed in children', () => {
    const {getByText} = render(<AppText>Hello</AppText>);
    expect(getByText('Hello')).toBeTruthy();
  });
});
