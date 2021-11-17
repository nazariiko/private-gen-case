import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import { userInfo } from '../data/user-info';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { EnumUserAction } from '../redux/types/user';
import { formatCount } from '../helpers/formatCount';
import UserPreloader from '../components/UserPreloader';
import Pagination from '../components/Pagination';
import Post from '../components/Post';
import PostPreloader from '../components/PostPreloader';
import { TrendsActions } from '../redux/types/trends';
// import { fetchUserInfo } from '../redux/action-creators/user';

const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 30px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 600px) {
    padding: 20px;
  }

  .listOfUserPosts {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 600px) {
      margin-left: 0;
    }
  }
`;

const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  .userTopInfo {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    .avatar {
      height: 100px;
      width: 100px;
      margin-right: 20px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .nickName {
      span {
        font-weight: bold;
        font-size: 26px;
        line-height: 35px;
        color: #000000;
      }
    }
  }

  .userStatsInfo {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    div {
      display: flex;
      align-items: center;

      p {
        font-weight: normal;
        font-size: 22px;
        line-height: 27px;
        color: #000000;
        margin-right: 20px;
      }

      span {
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        color: #ef2950;
      }
    }

    .followers {
      margin-bottom: 10px;
    }

    .following {
      margin-bottom: 10px;
    }
  }

  .postsCount {
    h2 {
      font-weight: bold;
      font-size: 36px;
      line-height: 45px;
      color: #000000;
    }
  }
`;

const StyledError = styled.div`
  p {
    color: red;
  }
`;

const StyledPostPreloader = styled.div`
  margin-bottom: 20px;
`;

const User = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const { info } = useTypedSelector((state) => state.user);
  const { trends, loading, error } = useTypedSelector((state) => state.trends);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    // dispatch(fetchUserInfo(params.name as string));
    dispatch({ type: EnumUserAction.USER_FETCH_INFO });
    setTimeout(() => {
      dispatch({ type: EnumUserAction.USER_FETCH_INFO_SUCCESS, payload: userInfo });
      // dispatch({ type: EnumUserAction.USER_FETCH_INFO_ERROR });
    }, 3000);
  }, [dispatch, params.name]);

  const getFromValue = () => {
    return page === 1 ? 0 : (page - 1) * 5;
  };

  const getToValue = () => {
    return page * 5;
  };

  const onChangePage = (page: number) => {
    dispatch({ type: TrendsActions.TRENDS_SET_LOADING });
    scroll.scrollToTop();
    setTimeout(() => {
      setPage(page);
      dispatch({ type: TrendsActions.TRENDS_SET_LOADED });
    }, 1000);
  };

  return (
    <StyledUser>
      {Object.keys(info.data).length !== 0 && !info.loading ? (
        <StyledUserInfo>
          <div className="userTopInfo">
            <div className="avatar">
              <img src={info.data.user.avatarThumb} alt={info.data.user.id} />
            </div>
            <div className="nickName">
              <span>{info.data.user.uniqueId}</span>
            </div>
          </div>

          <div className="userStatsInfo">
            <div className="followers">
              <p>Followers</p>
              <span>{formatCount(info.data.stats.followerCount)}</span>
            </div>

            <div className="following">
              <p>Following</p>
              <span>{formatCount(info.data.stats.followingCount)}</span>
            </div>

            <div className="hearts">
              <p>Hearts</p>
              <span>{formatCount(info.data.stats.heartCount)}</span>
            </div>
          </div>

          <div className="postsCount">
            <h2>Posts: {info.data.stats.videoCount}</h2>
          </div>
        </StyledUserInfo>
      ) : !info.error ? (
        <UserPreloader />
      ) : (
        <StyledError>
          <p>:( Network or API Error!</p>
        </StyledError>
      )}
      <div className="listOfUserPosts">
        {trends.length && !loading ? (
          trends
            .slice(getFromValue(), getToValue())
            .map((trend) => (
              <Post
                avatarUrl={trend.authorMeta.avatar}
                name={trend.authorMeta.name}
                text={trend.text}
                videoUrl={trend.videoUrl}
                commentCount={trend.commentCount}
                heartCount={trend.diggCount}
                playCount={trend.playCount}
                key={trend.id}
              />
            ))
        ) : !error ? (
          Array(5)
            .fill(0)
            .map((_, index) => (
              <StyledPostPreloader key={index}>
                <PostPreloader />
              </StyledPostPreloader>
            ))
        ) : (
          <StyledError>
            <p>:( Network or API Error!</p>
          </StyledError>
        )}
      </div>
      <Pagination page={page} onChangePage={onChangePage} />
    </StyledUser>
  );
};

export default User;
