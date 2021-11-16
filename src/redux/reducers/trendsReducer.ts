import { ITrendsAction, ITrendsState, TrendsActions } from '../types/trends';

const initialState: ITrendsState = {
  trends: [],
  loading: false,
  error: null,
};

export const trendsReducer = (state = initialState, action: ITrendsAction): ITrendsState => {
  switch (action.type) {
    case TrendsActions.TRENDS_FETCH:
      return { loading: true, error: null, trends: [] };
    case TrendsActions.TRENDS_FETCH_SUCCESS:
      return { loading: false, error: null, trends: action.payload };
    case TrendsActions.TRENDS_FETCH_ERROR:
      return { loading: false, error: 'Error', trends: [] };
    case TrendsActions.TRENDS_SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TrendsActions.TRENDS_SET_LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
