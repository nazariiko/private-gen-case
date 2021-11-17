import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { useDispatch } from 'react-redux';

import Post from '../components/Post';
import PostPreloader from '../components/PostPreloader';
import Pagination from '../components/Pagination';

import { TrendsActions } from '../redux/types/trends';

const StyledTrends = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 30px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 600px) {
    padding: 20px;
  }

  .heading {
    margin-bottom: 20px;

    h1 {
      font-weight: bold;
      font-size: 32px;
      line-height: 42px;
      color: #000000;
    }
  }

  .listOfTrends {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 600px) {
      margin-left: 0;
    }
  }
`;

const StyledPostPreloader = styled.div`
  margin-bottom: 20px;
`;

const StyledError = styled.div`
  p {
    color: red;
  }
`;

const Trends = () => {
  const { trends, loading, error } = useTypedSelector((state) => state.trends);
  const [page, setPage] = React.useState(1);
  const dispatch = useDispatch();

  const onChangePage = (page: number) => {
    dispatch({ type: TrendsActions.TRENDS_SET_LOADING });
    scroll.scrollToTop();
    setTimeout(() => {
      setPage(page);
      dispatch({ type: TrendsActions.TRENDS_SET_LOADED });
    }, 1000);
  };

  const getFromValue = () => {
    return page === 1 ? 0 : (page - 1) * 5;
  };

  const getToValue = () => {
    return page * 5;
  };

  return (
    <StyledTrends>
      <div className="heading">
        <h1>Trends</h1>
      </div>

      <div className="listOfTrends">
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
      <Pagination onChangePage={onChangePage} page={page} />
    </StyledTrends>
  );
};

export default Trends;
