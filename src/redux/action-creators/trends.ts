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
          'x-rapidapi-key': '16da4ea503msh032c64c7a11bfe4p14071djsn35feb5305f81'
        }
      })
      dispatch({ type: TrendsActions.TRENDS_FETCH_SUCCESS, payload: response.data });
    } catch(error) {
      dispatch({ type: TrendsActions.TRENDS_FETCH_ERROR });
    }
  }
}