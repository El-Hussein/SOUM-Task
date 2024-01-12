import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;
const defaultFactor = width > guidelineBaseWidth ? 0.5 : 1.25;
export const calcWidth = (size) => (width / guidelineBaseWidth) * size; // only width
export const calcHeight = (size) => (height / guidelineBaseHeight) * size; // only height
export const calcFont = (size, factor = defaultFactor) =>
  size + (calcWidth(size) - size) * factor; // fontsize , margin , padding , iconsize , etc
