import {
  GET_HOME_SECTIONS,
  UPDATE_HOME_SECTION_STATE,
} from '@actions/ACTION_TYPES';
import {
  GetHomeSectionHTTPSuccessResponse,
  HomeSectionState,
  HTTP_REQUEST_STATE_ENUM,
} from '@app-types';

export default {
  [GET_HOME_SECTIONS.PENDING]: (draftStart: HomeSectionState) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.PENDING;
  },
  [GET_HOME_SECTIONS.SUCCESS]: (
    draftStart: HomeSectionState,
    { response }: { response: GetHomeSectionHTTPSuccessResponse },
  ) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.SUCCESS;
    draftStart.sections = response.data;
  },
  [GET_HOME_SECTIONS.ERROR]: (draftStart: HomeSectionState, { data }) => {
    draftStart.state = HTTP_REQUEST_STATE_ENUM.FAILURE;
  },
  [UPDATE_HOME_SECTION_STATE]: (
    draftStart: HomeSectionState,
    { sectionId, state }: { sectionId: number; state: HTTP_REQUEST_STATE_ENUM },
  ) => {
    const sectionStateIndex = draftStart.stateOf.findIndex(
      (sectionState) => sectionState.sectionId === sectionId,
    );
    if (sectionStateIndex !== -1) {
      draftStart.stateOf[sectionStateIndex].state = state;
    } else {
      draftStart.stateOf.push({
        sectionId,
        state,
      });
    }
  },
};
