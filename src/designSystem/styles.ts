import {StyleSheet} from 'react-native';
import colors from './colors';
import {borders, fontSizes, lineHeights, margins, paddings} from './constants';

const textStyles = StyleSheet.create({
  'text-h1': {
    fontSize: fontSizes['4xl'],
    fontWeight: 'bold',
    lineHeight: lineHeights['4xl'],
  },
  'text-h2': {
    fontSize: fontSizes['3xl'],
    fontWeight: 'bold',
    lineHeight: lineHeights['3xl'],
  },
  'text-h3': {
    fontSize: fontSizes['2xl'],
    fontWeight: 'bold',
    lineHeight: lineHeights['2xl'],
  },
  'text-h4': {
    fontSize: fontSizes['xl'],
    fontWeight: 'bold',
    lineHeight: lineHeights['xl'],
  },
  'text-h5': {
    fontSize: fontSizes['lg'],
    fontWeight: 'bold',
    lineHeight: lineHeights['lg'],
  },
  'text-h6': {
    fontSize: fontSizes['md'],
    fontWeight: 'bold',
    lineHeight: lineHeights['md'],
  },
  'text-subtitle': {
    fontSize: fontSizes['lg'],
    fontWeight: 'normal',
    lineHeight: lineHeights['lg'],
  },
  'text-subtitle2': {
    fontSize: fontSizes['sm'],
    fontWeight: 'normal',
    lineHeight: lineHeights['sm'],
  },
  'text-subtitle3': {
    fontSize: fontSizes['xs'],
    fontWeight: 'normal',
    lineHeight: lineHeights['xs'],
  },
  'text-normal': {
    fontSize: fontSizes['md'],
    fontWeight: 'normal',
    lineHeight: lineHeights['md'],
  },
  'text-normal2': {
    fontSize: fontSizes['sm'],
    fontWeight: 'normal',
    lineHeight: lineHeights['sm'],
  },
  'text-disabled': {
    fontSize: fontSizes['md'],
    fontWeight: 'normal',
    lineHeight: lineHeights['md'],
    color: colors['gray-text'],
  },
  'text-center': {
    textAlign: 'center',
  },
  'text-black': {
    color: colors['black'],
  },
  'text-main': {
    color: colors['main'],
  },
  'text-secondary': {
    color: colors['secondary'],
  },
  'text-white': {
    color: colors['white'],
  },
  'text-light': {
    color: colors['light-black'],
  },
});

const borderStyles = StyleSheet.create({
  border: {
    borderWidth: borders.sm,
    borderColor: colors['black'],
  },
  'border-light': {
    borderWidth: borders.sm,
    borderColor: colors['light-black'],
  },
  'border-primary': {
    borderWidth: borders.sm,
    borderColor: colors['main'],
  },
  'border-secondary': {
    borderWidth: borders.sm,
    borderColor: colors['secondary'],
  },
  'border-error': {
    borderWidth: borders.sm,
    borderColor: colors['error'],
  },
  'border-gray': {
    borderWidth: borders.sm,
    borderColor: colors['gray-border'],
  },
  'rounded-sm': {
    borderRadius: borders['radius-sm'],
  },
  'rounded-md': {
    borderRadius: borders['radius-md'],
  },
  'rounded-lg': {
    borderRadius: borders['radius-lg'],
  },
  'rounded-full': {
    borderRadius: 99999,
  },
});

const basicStyles = StyleSheet.create({
  button: {
    ...textStyles['text-normal'],
    borderRadius: borders['radius-md'],
    padding: paddings.sm,
  },
  container: {
    flex: 1,
    paddingHorizontal: paddings.md,
  },
});

const buttonStyles = StyleSheet.create({
  'button-primary': {
    ...basicStyles['button'],
    backgroundColor: colors['main'],
    color: colors['white'],
  },
  'button-secondary': {
    ...basicStyles['button'],
    backgroundColor: colors['secondary'],
    color: colors['black'],
  },
  'button-error': {
    ...basicStyles['button'],
    backgroundColor: colors['error'],
    color: colors['white'],
  },
  'button-primary-outline': {
    ...basicStyles['button'],
    backgroundColor: colors['white'],
    color: colors['main'],
    ...borderStyles['border-primary'],
  },
  'button-secondary-outline': {
    ...basicStyles['button'],
    backgroundColor: colors['white'],
    color: colors['secondary'],
    ...borderStyles['border-secondary'],
  },
  'button-error-outline': {
    ...basicStyles['button'],
    backgroundColor: colors['white'],
    color: colors['error'],
    ...borderStyles['border-error'],
  },
});

const containerStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: paddings.md,
  },
  'row-container': {
    ...basicStyles['container'],
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  'row-container-center': {
    ...basicStyles['container'],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'column-container': {
    ...basicStyles['container'],
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  'column-container-center': {
    ...basicStyles['container'],
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'wrap-content': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  'flex-1': {
    flex: 1,
  },
  'flex-2': {
    flex: 2,
  },
  'flex-3': {
    flex: 3,
  },
  'flex-4': {
    flex: 4,
  },
  'flex-5': {
    flex: 5,
  },
});

const marginsStyles = StyleSheet.create({
  'm-xs': {
    margin: margins.xs,
  },
  'm-sm': {
    margin: margins.sm,
  },
  'm-md': {
    margin: margins.md,
  },
  'm-lg': {
    margin: margins.lg,
  },
  'mb-xs': {
    marginBottom: margins.xs,
  },
  'mb-sm': {
    marginBottom: margins.sm,
  },
  'mb-md': {
    marginBottom: margins.md,
  },
  'mb-lg': {
    marginBottom: margins.lg,
  },
  'mb-xl': {
    marginBottom: margins.xl,
  },
  'mb-2xl': {
    marginBottom: margins['2xl'],
  },
  'mb-3xl': {
    marginBottom: margins['3xl'],
  },
  'mb-4xl': {
    marginBottom: margins['4xl'],
  },
  'mb-5xl': {
    marginBottom: margins['5xl'],
  },
  'mt-xs': {
    marginTop: margins.xs,
  },
  'mt-sm': {
    marginTop: margins.sm,
  },
  'mt-md': {
    marginTop: margins.md,
  },
  'mt-lg': {
    marginTop: margins.lg,
  },
  'mt-xl': {
    marginTop: margins.xl,
  },
  'mt-2xl': {
    marginTop: margins['2xl'],
  },
  'mt-3xl': {
    marginTop: margins['3xl'],
  },
  'mt-4xl': {
    marginTop: margins['4xl'],
  },
  'mt-5xl': {
    marginTop: margins['5xl'],
  },
  'ml-xs': {
    marginLeft: margins.xs,
  },
  'ml-sm': {
    marginLeft: margins.sm,
  },
  'ml-md': {
    marginLeft: margins.md,
  },
  'ml-lg': {
    marginLeft: margins.lg,
  },
  'ml-xl': {
    marginLeft: margins.xl,
  },
  'ml-2xl': {
    marginLeft: margins['2xl'],
  },
  'ml-3xl': {
    marginLeft: margins['3xl'],
  },
  'ml-4xl': {
    marginLeft: margins['4xl'],
  },
  'ml-5xl': {
    marginLeft: margins['5xl'],
  },
  'mr-xs': {
    marginRight: margins.xs,
  },
  'mr-sm': {
    marginRight: margins.sm,
  },
  'mr-md': {
    marginRight: margins.md,
  },
  'mr-lg': {
    marginRight: margins.lg,
  },
  'mr-xl': {
    marginRight: margins.xl,
  },
  'mr-2xl': {
    marginRight: margins['2xl'],
  },
  'mr-3xl': {
    marginRight: margins['3xl'],
  },
  'mr-4xl': {
    marginRight: margins['4xl'],
  },
  'mr-5xl': {
    marginRight: margins['5xl'],
  },
  'mx-xs': {
    marginHorizontal: margins.xs,
  },
  'mx-sm': {
    marginHorizontal: margins.sm,
  },
  'mx-md': {
    marginHorizontal: margins.md,
  },
  'mx-lg': {
    marginHorizontal: margins.lg,
  },
  'mx-xl': {
    marginHorizontal: margins.xl,
  },
  'mx-2xl': {
    marginHorizontal: margins['2xl'],
  },
  'mx-3xl': {
    marginHorizontal: margins['3xl'],
  },
  'mx-4xl': {
    marginHorizontal: margins['4xl'],
  },
  'mx-5xl': {
    marginHorizontal: margins['5xl'],
  },
  'mx-auto': {
    marginHorizontal: 'auto',
  },
  'my-xs': {
    marginVertical: margins.xs,
  },
  'my-sm': {
    marginVertical: margins.sm,
  },
  'my-md': {
    marginVertical: margins.md,
  },
  'my-lg': {
    marginVertical: margins.lg,
  },
  'my-xl': {
    marginVertical: margins.xl,
  },
  'my-2xl': {
    marginVertical: margins['2xl'],
  },
  'my-3xl': {
    marginVertical: margins['3xl'],
  },
  'my-4xl': {
    marginVertical: margins['4xl'],
  },
  'my-5xl': {
    marginVertical: margins['5xl'],
  },
  'my-auto': {
    marginVertical: 'auto',
  },
});

const paddingsStyles = StyleSheet.create({
  'p-xs': {
    padding: paddings.xs,
  },
  'p-sm': {
    padding: paddings.sm,
  },
  'p-md': {
    padding: paddings.md,
  },
  'p-lg': {
    padding: paddings.lg,
  },
  'pb-xs': {
    paddingBottom: paddings.xs,
  },
  'pb-sm': {
    paddingBottom: paddings.sm,
  },
  'pb-md': {
    paddingBottom: paddings.md,
  },
  'pb-lg': {
    paddingBottom: paddings.lg,
  },
  'pb-xl': {
    paddingBottom: paddings.xl,
  },
  'pb-2xl': {
    paddingBottom: paddings['2xl'],
  },
  'pb-3xl': {
    paddingBottom: paddings['3xl'],
  },
  'pb-4xl': {
    paddingBottom: paddings['4xl'],
  },
  'pb-5xl': {
    paddingBottom: paddings['5xl'],
  },
  'pt-xs': {
    paddingTop: paddings.xs,
  },
  'pt-sm': {
    paddingTop: paddings.sm,
  },
  'pt-md': {
    paddingTop: paddings.md,
  },
  'pt-lg': {
    paddingTop: paddings.lg,
  },
  'pt-xl': {
    paddingTop: paddings.xl,
  },
  'pt-2xl': {
    paddingTop: paddings['2xl'],
  },
  'pt-3xl': {
    paddingTop: paddings['3xl'],
  },
  'pt-4xl': {
    paddingTop: paddings['4xl'],
  },
  'pt-5xl': {
    paddingTop: paddings['5xl'],
  },
  'pl-xs': {
    paddingLeft: paddings.xs,
  },
  'pl-sm': {
    paddingLeft: paddings.sm,
  },
  'pl-md': {
    paddingLeft: paddings.md,
  },
  'pl-lg': {
    paddingLeft: paddings.lg,
  },
  'pl-xl': {
    paddingLeft: paddings.xl,
  },
  'pl-2xl': {
    paddingLeft: paddings['2xl'],
  },
  'pl-3xl': {
    paddingLeft: paddings['3xl'],
  },
  'pl-4xl': {
    paddingLeft: paddings['4xl'],
  },
  'pl-5xl': {
    paddingLeft: paddings['5xl'],
  },
  'pr-xs': {
    paddingRight: paddings.xs,
  },
  'pr-sm': {
    paddingRight: paddings.sm,
  },
  'pr-md': {
    paddingRight: paddings.md,
  },
  'pr-lg': {
    paddingRight: paddings.lg,
  },
  'pr-xl': {
    paddingRight: paddings.xl,
  },
  'pr-2xl': {
    paddingRight: paddings['2xl'],
  },
  'pr-3xl': {
    paddingRight: paddings['3xl'],
  },
  'pr-4xl': {
    paddingRight: paddings['4xl'],
  },
  'pr-5xl': {
    paddingRight: paddings['5xl'],
  },
  'px-xs': {
    paddingHorizontal: paddings.xs,
  },
  'px-sm': {
    paddingHorizontal: paddings.sm,
  },
  'px-md': {
    paddingHorizontal: paddings.md,
  },
  'px-lg': {
    paddingHorizontal: paddings.lg,
  },
  'px-xl': {
    paddingHorizontal: paddings.xl,
  },
  'px-2xl': {
    paddingHorizontal: paddings['2xl'],
  },
  'px-3xl': {
    paddingHorizontal: paddings['3xl'],
  },
  'px-4xl': {
    paddingHorizontal: paddings['4xl'],
  },
  'px-5xl': {
    paddingHorizontal: paddings['5xl'],
  },
  'px-auto': {
    paddingHorizontal: 'auto',
  },
  'py-xs': {
    paddingVertical: paddings.xs,
  },
  'py-sm': {
    paddingVertical: paddings.sm,
  },
  'py-md': {
    paddingVertical: paddings.md,
  },
  'py-lg': {
    paddingVertical: paddings.lg,
  },
  'py-xl': {
    paddingVertical: paddings.xl,
  },
  'py-2xl': {
    paddingVertical: paddings['2xl'],
  },
  'py-3xl': {
    paddingVertical: paddings['3xl'],
  },
  'py-4xl': {
    paddingVertical: paddings['4xl'],
  },
  'py-5xl': {
    paddingVertical: paddings['5xl'],
  },
  'py-auto': {
    paddingVertical: 'auto',
  },
});

const width = StyleSheet.create({
  'w-0': {
    width: 0,
  },
  'w-1': {
    width: 4,
  },
  'w-2': {
    width: 8,
  },
  'w-3': {
    width: 12,
  },
  'w-4': {
    width: 16,
  },
  'w-5': {
    width: 20,
  },
  'w-xs': {
    width: 30,
  },
  'w-sm': {
    width: 50,
  },
  'w-md': {
    width: 80,
  },
  'w-lg': {
    width: 100,
  },
  'w-xl': {
    width: 150,
  },
  'w-2xl': {
    width: 200,
  },
  'w-3xl': {
    width: 250,
  },
  'w-4xl': {
    width: 300,
  },
  'w-full': {
    width: '100%',
  },
});

const height = StyleSheet.create({
  'h-0': {
    height: 0,
  },
  'h-1': {
    height: 4,
  },
  'h-2': {
    height: 8,
  },
  'h-3': {
    height: 12,
  },
  'h-4': {
    height: 16,
  },
  'h-5': {
    height: 20,
  },
  'h-xs': {
    height: 30,
  },
  'h-sm': {
    height: 50,
  },
  'h-md': {
    height: 80,
  },
  'h-lg': {
    height: 100,
  },
  'h-xl': {
    height: 150,
  },
  'h-2xl': {
    height: 200,
  },
  'h-3xl': {
    height: 250,
  },
  'h-4xl': {
    height: 300,
  },
  'h-full': {
    height: '100%',
  },
});

const positioning = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  'top-0': {
    top: 0,
  },
  'top-1': {
    top: 4,
  },
  'top-2': {
    top: 8,
  },
  'top-3': {
    top: 12,
  },
  'top-4': {
    top: 16,
  },
  'top-5': {
    top: 20,
  },
  'top-xs': {
    top: 30,
  },
  'top-sm': {
    top: 50,
  },
  'top-md': {
    top: 80,
  },
  'top-lg': {
    top: 100,
  },
  'top-xl': {
    top: 150,
  },
  'top-2xl': {
    top: 200,
  },
  'top-3xl': {
    top: 250,
  },
  'top-4xl': {
    top: 300,
  },
  'top-full': {
    top: '100%',
  },
  'bottom-0': {
    bottom: 0,
  },
  'bottom-1': {
    bottom: 4,
  },
  'bottom-2': {
    bottom: 8,
  },
  'bottom-3': {
    bottom: 12,
  },
  'bottom-4': {
    bottom: 16,
  },
  'bottom-5': {
    bottom: 20,
  },
  'bottom-xs': {
    bottom: 30,
  },
  'bottom-sm': {
    bottom: 50,
  },
  'bottom-md': {
    bottom: 80,
  },
  'bottom-lg': {
    bottom: 100,
  },
  'bottom-xl': {
    bottom: 150,
  },
  'bottom-2xl': {
    bottom: 200,
  },
  'bottom-3xl': {
    bottom: 250,
  },
  'bottom-4xl': {
    bottom: 300,
  },
  'bottom-full': {
    bottom: '100%',
  },
  'left-0': {
    left: 0,
  },
  'left-1': {
    left: 4,
  },
  'left-2': {
    left: 8,
  },
  'left-3': {
    left: 12,
  },
  'left-4': {
    left: 16,
  },
  'left-5': {
    left: 20,
  },
  'left-xs': {
    left: 30,
  },
  'left-sm': {
    left: 50,
  },
  'left-md': {
    left: 80,
  },
  'left-lg': {
    left: 100,
  },
  'left-xl': {
    left: 150,
  },
  'left-2xl': {
    left: 200,
  },
  'left-3xl': {
    left: 250,
  },
  'left-4xl': {
    left: 300,
  },
  'left-full': {
    left: '100%',
  },
  'right-0': {
    right: 0,
  },
  'right-1': {
    right: 4,
  },
  'right-2': {
    right: 8,
  },
  'right-3': {
    right: 12,
  },
  'right-4': {
    right: 16,
  },
  'right-5': {
    right: 20,
  },
  'right-xs': {
    right: 30,
  },
  'right-sm': {
    right: 50,
  },
  'right-md': {
    right: 80,
  },
  'right-lg': {
    right: 100,
  },
  'right-xl': {
    right: 150,
  },
  'right-2xl': {
    right: 200,
  },
  'right-3xl': {
    right: 250,
  },
  'right-4xl': {
    right: 300,
  },
  'right-full': {
    right: '100%',
  },
  'z-0': {
    zIndex: 0,
  },
  'z-1': {
    zIndex: 1,
  },
  'z-2': {
    zIndex: 2,
  },
  'z-3': {
    zIndex: 3,
  },
  'z-4': {
    zIndex: 4,
  },
  'z-5': {
    zIndex: 5,
  },
  'z-top': {
    zIndex: 9999,
  },
  'z-bottom': {
    zIndex: -9999,
  },
});

const backgroundColors = StyleSheet.create({
  'bg-white': {
    backgroundColor: colors.white,
  },
  'bg-black': {
    backgroundColor: colors.black,
  },
  'bg-main': {
    backgroundColor: colors.main,
  },
  'bg-secondary': {
    backgroundColor: colors.secondary,
  },
  'bg-error': {
    backgroundColor: colors.error,
  },
});

export default StyleSheet.create({
  ...textStyles,
  ...borderStyles,
  ...buttonStyles,
  ...containerStyles,
  ...marginsStyles,
  ...paddingsStyles,
  ...width,
  ...height,
  ...positioning,
  ...backgroundColors,
});
