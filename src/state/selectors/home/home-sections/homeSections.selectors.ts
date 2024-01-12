import { HomeSection, HTTP_REQUEST_STATE_ENUM } from '@app-types';
import { ReduxState as RootState } from '@utils/types';

export const selectHomeSectionState = (
  state: RootState,
): HTTP_REQUEST_STATE_ENUM => state.newState.UI.home.homeSections.state;

export const selectHomeSections = (state: RootState): HomeSection[] =>
  state.newState.UI.home.homeSections.sections;

export const selectHomeSection = (
  state: RootState,
  sectionId: number,
): HomeSection =>
  state.newState.UI.home.homeSections.sections.find(
    (section) => section.homeSectionId === sectionId,
  ) as HomeSection;

export const selectSectionLoading = (
  state: RootState,
  sectionId: number,
): boolean =>
  state.newState.UI.home.homeSections.stateOf.find(
    (section) => section.sectionId === sectionId,
  )?.state === HTTP_REQUEST_STATE_ENUM.PENDING;
