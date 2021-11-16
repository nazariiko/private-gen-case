export interface ISoundState {
  isMuted: boolean;
}

export enum SoundActions {
  TOGGLE_MUTED = 'TOGGLE_MUTED',
}

interface IToggleMutedAction {
  type: SoundActions.TOGGLE_MUTED;
}

export type SoundAction = IToggleMutedAction;
