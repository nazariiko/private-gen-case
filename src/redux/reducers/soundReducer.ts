import { ISoundState, SoundAction, SoundActions } from '../types/sound';

const intialState: ISoundState = {
  isMuted: true,
};

export const soundReducer = (state = intialState, action: SoundAction) => {
  switch (action.type) {
    case SoundActions.TOGGLE_MUTED:
      return {
        ...state,
        isMuted: !state.isMuted,
      };
    default:
      return state;
  }
};
