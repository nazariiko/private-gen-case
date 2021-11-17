import axios from 'axios';
import { Dispatch } from 'redux';
import { EnumUserAction, UserAction } from '../types/user';

export const fetchUserInfo = (name: string) => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: EnumUserAction.USER_FETCH_INFO });
    const response = await axios.get(`https://tiktok33.p.rapidapi.com/user/info/${name}`, {
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': '16da4ea503msh032c64c7a11bfe4p14071djsn35feb5305f81',
      },
    });
    dispatch({ type: EnumUserAction.USER_FETCH_INFO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: EnumUserAction.USER_FETCH_INFO_ERROR });
  }
};

export const fetchUserFeed = (name: string) => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: EnumUserAction.USER_FETCH_FEED });
    const response = await axios.get(`https://tiktok33.p.rapidapi.com/user/feed/${name}`, {
      headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
      },
    });
    dispatch({ type: EnumUserAction.USER_FETCH_FEED_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: EnumUserAction.USER_FETCH_FEED_ERROR });
  }
};
