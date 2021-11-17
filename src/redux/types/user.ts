export interface IUserState {
  info: IUserInfoOrFeed;
  feed: IUserInfoOrFeed;
}

interface IUserInfoOrFeed {
  data: any;
  loading: boolean;
  error: null | string;
}

export enum EnumUserAction {
  USER_FETCH_INFO = 'USER_FETCH_INFO',
  USER_FETCH_INFO_SUCCESS = 'USER_FETCH_INFO_SUCCESS',
  USER_FETCH_INFO_ERROR = 'USER_FETCH_INFO_ERROR',
  USER_FETCH_FEED = 'USER_FETCH_FEED',
  USER_FETCH_FEED_SUCCESS = 'USER_FETCH_FEED_SUCCESS',
  USER_FETCH_FEED_ERROR = 'USER_FETCH_FEED_ERROR',
}

interface IFetchUserInfo {
  type: EnumUserAction.USER_FETCH_INFO;
}

interface IFetchUserInfoSuccess {
  type: EnumUserAction.USER_FETCH_INFO_SUCCESS;
  payload: any;
}

interface IFetchUserInfoError {
  type: EnumUserAction.USER_FETCH_INFO_ERROR;
}

interface IFetchUserFeed {
  type: EnumUserAction.USER_FETCH_FEED;
}

interface IFetchUserFeedSuccess {
  type: EnumUserAction.USER_FETCH_FEED_SUCCESS;
  payload: any;
}

interface IFetchUserFeedError {
  type: EnumUserAction.USER_FETCH_FEED_ERROR;
}

export type UserAction =
  | IFetchUserInfo
  | IFetchUserInfoSuccess
  | IFetchUserInfoError
  | IFetchUserFeed
  | IFetchUserFeedSuccess
  | IFetchUserFeedError;
