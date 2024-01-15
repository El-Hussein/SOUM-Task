import {FC} from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

export interface CachedImageProps {
  uri: string;
  style?: FastImageProps['style'];
  resizeMode?: FastImageProps['resizeMode'];
}

const CachedImage: FC<CachedImageProps> = props => {
  const {uri, style, resizeMode} = props;
  return (
    <FastImage
      testID={'cached-image'}
      style={style}
      source={{
        uri,
        priority: FastImage.priority.normal,
      }}
      resizeMode={resizeMode || FastImage.resizeMode.contain}
    />
  );
};

export default CachedImage;
