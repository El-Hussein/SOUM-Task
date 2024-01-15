import {render} from '@testing-library/react-native';
import CachedImage from './CachedImage';

describe('CachedImage', () => {
  it('should render the image with the correct uri', () => {
    const uri = 'https://example.com';
    const {getByTestId} = render(<CachedImage uri={uri} />);
    expect(getByTestId('cached-image')).toBeTruthy();
    expect(getByTestId('cached-image').props.source.uri).toBe(uri);
  });
});
