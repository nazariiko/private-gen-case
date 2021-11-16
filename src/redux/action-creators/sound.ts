import { SoundActions } from '../types/sound';

export const toggleSound = () => {
  return {
    type: SoundActions.TOGGLE_MUTED,
  };
};
