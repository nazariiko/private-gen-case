import axios from 'axios';
import { Dispatch } from 'redux';
import { TrendsActions, ITrendsAction } from '../types/trends';

export const fetchTrends = () => {
  return async (dispatch: Dispatch<ITrendsAction>) => {
    try {
      dispatch({ type: TrendsActions.TRENDS_FETCH });
      const response = await axios.get('https://tiktok33.p.rapidapi.com/trending/feed', {
        headers: {
          'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
          'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
        },
      });
      dispatch({ type: TrendsActions.TRENDS_FETCH_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: TrendsActions.TRENDS_FETCH_ERROR });
    }
  };
};
