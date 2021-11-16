import { ISoundState, SoundAction, SoundActions } from '../types/sound';

const intialState: ISoundState = {
  isMuted: true,
};

export const soundReducer = (state = intialState, action: SoundAction) => {
  switch (action.type) {
    case SoundActions.TOGGLE_MUTED:
      let prevState = state;
      return {
        ...state,
        isMuted: !prevState.isMuted,
      };
    default:
      return state;
  }
};
