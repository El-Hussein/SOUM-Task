import { HTTP_REQUEST_STATE_ENUM } from '@app-types/common';

export interface HomeSection {
  homeSectionId: number;
  type: string;
  metadata?: {
    hideHeaderName?: boolean;
    hideSeeAll?: boolean;
    name: {
      en: string;
      ar: string;
    };
    selectedIds?: number[];
  };
}

export interface SectionState {
  sectionId: number;
  state: HTTP_REQUEST_STATE_ENUM;
}
export interface HomeSectionState {
  state: HTTP_REQUEST_STATE_ENUM;
  stateOf: SectionState[];
  sections: HomeSection[];
}
