import { StyleSheet } from 'react-native';
import colors from './colors';
import {
  borders,
  fontSizes,
  lineHeights,
  margins,
  paddings,
} from './constants';

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
    fontSize: fontSizes['md'],
    fontWeight: 'normal',
    lineHeight: lineHeights['md'],
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
  'text-white': {
    color: colors['white'],
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
});

const basicStyles = StyleSheet.create({
  button: {
    ...textStyles['text-normal'],
    borderRadius: borders['radius-md'],
    padding: paddings.sm,
  },
  container: {
    flex: 1,
    padding: paddings.md,
    marginVertical: margins.md,
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
  'column-container': {
    ...basicStyles['container'],
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  'wrap-content': {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  'w-xs': {
    width: 100,
  },
  'w-sm': {
    width: 150,
  },
  'w-md': {
    width: 200,
  },
  'w-lg': {
    width: 250,
  },
  'w-full': {
    width: '100%',
  },
});

const height = StyleSheet.create({
  'h-xs': {
    height: 100,
  },
  'h-sm': {
    height: 150,
  },
  'h-md': {
    height: 200,
  },
  'h-lg': {
    height: 250,
  },
  'h-full': {
    height: '100%',
  },
});

const positioning = StyleSheet.create({
  absolute: {
    position: 'absolute',
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
});
