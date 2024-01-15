import {FC} from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';

export enum AppIconType {
  IONICONS = 'Ionicons',
  MATERIAL_COMMUNITY = 'MaterialCommunityIcons',
  MATERIAL = 'MaterialIcons',
  FONT_AWESOME = 'FontAwesome',
  FONT_AWESOME5 = 'FontAwesome5',
  FONTISTO = 'Fontisto',
}

interface Props extends IconProps {
  type?: AppIconType;
}

export const AppIcon: FC<Props> = props => {
  const {type} = props;

  switch (type) {
    case AppIconType.FONT_AWESOME:
      return <FontAwesome testID="FontAwesome" {...props} />;
    case AppIconType.FONT_AWESOME5:
      return <FontAwesome5 testID="FontAwesome5" {...props} />;
    case AppIconType.IONICONS:
      return <Ionicons testID="Ionicons" {...props} />;
    case AppIconType.MATERIAL:
      return <MaterialIcons testID="MaterialIcons" {...props} />;
    case AppIconType.MATERIAL_COMMUNITY:
      return (
        <MaterialCommunityIcons testID="MaterialCommunityIcons" {...props} />
      );
    case AppIconType.FONTISTO:
      return <Fontisto testID="Fontisto" {...props} />;
    default:
      return <FontAwesome testID="FontAwesome" {...props} />;
  }
};

export default AppIcon;
