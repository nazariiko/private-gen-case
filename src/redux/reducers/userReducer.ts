import { EnumUserAction, IUserState, UserAction } from '../types/user';

const intialState: IUserState = {
  info: {
    data: [],
    loading: false,
    error: null,
  },
  feed: {
    data: [],
    loading: false,
    error: null,
  },
};

export const userReducer = (state = intialState, action: UserAction): IUserState => {
  switch (action.type) {
    case EnumUserAction.USER_FETCH_INFO:
      return {
        ...state,
        info: {
          data: [],
          loading: true,
          error: null,
        },
      };

    case EnumUserAction.USER_FETCH_INFO_SUCCESS:
      return {
        ...state,
        info: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };

    case EnumUserAction.USER_FETCH_INFO_ERROR:
      return {
        ...state,
        info: {
          data: [],
          loading: false,
          error: 'Error',
        },
      };

    case EnumUserAction.USER_FETCH_FEED:
      return {
        ...state,
        feed: {
          data: [],
          loading: true,
          error: null,
        },
      };

    case EnumUserAction.USER_FETCH_FEED_SUCCESS:
      return {
        ...state,
        feed: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };

    case EnumUserAction.USER_FETCH_FEED_ERROR:
      return {
        ...state,
        feed: {
          data: [],
          loading: false,
          error: 'Error',
        },
      };
    default:
      return state;
  }
};
