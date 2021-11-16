export interface ITrendsState {
  trends: any[];
  loading: boolean;
  error: string | null;
}

export enum TrendsActions {
  TRENDS_FETCH = 'TRENDS_FETCH',
  TRENDS_FETCH_SUCCESS = 'TRENDS_FETCH_SUCCESS',
  TRENDS_FETCH_ERROR = 'TRENDS_FETCH_ERROR',
  TRENDS_SET_LOADING = 'TRENDS_SET_LOADING',
  TRENDS_SET_LOADED = 'TRENDS_SET_LOADED',
}

interface IFetchTrendsAction {
  type: TrendsActions.TRENDS_FETCH;
}

interface IFetchTrendsSuccessAction {
  type: TrendsActions.TRENDS_FETCH_SUCCESS;
  payload: any[];
}

interface IFetchTrendsErrorAction {
  type: TrendsActions.TRENDS_FETCH_ERROR;
}

interface ISetLoadingAction {
  type: TrendsActions.TRENDS_SET_LOADING;
}

interface ISetLoadedAction {
  type: TrendsActions.TRENDS_SET_LOADED;
}

export type ITrendsAction =
  | IFetchTrendsAction
  | IFetchTrendsSuccessAction
  | IFetchTrendsErrorAction
  | ISetLoadingAction
  | ISetLoadedAction;
