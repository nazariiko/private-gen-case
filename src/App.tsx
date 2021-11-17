import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { TrendsActions } from './redux/types/trends';
// import { fetchTrends } from './redux/action-creators/trends';
import { trends as trendsData } from './data/trends';
import { Route, Routes, Navigate } from 'react-router-dom';
import Trends from './pages/Trends';
import User from './pages/User';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const StyledApp = styled.div`
  max-width: 1100px;
  width: 1100px;
  margin: 20px;
  background-color: white;
  box-shadow: 0px 0px 15px 5px rgba(239, 41, 80, 0.1);
  border-radius: 40px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin: 0;
    border-radius: 0;
  }
`;

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: TrendsActions.TRENDS_FETCH });
    // setTimeout(() => {
    //   dispatch({ type: TrendsActions.TRENDS_FETCH_ERROR });
    // }, 3000);
    setTimeout(() => {
      dispatch({ type: TrendsActions.TRENDS_FETCH_SUCCESS, payload: trendsData });
    }, 2000);
    // dispatch(fetchTrends());
  }, [dispatch]);

  return (
    <StyledApp>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/trends" />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/user/:name" element={<User />} />
      </Routes>
      <Footer />
    </StyledApp>
  );
};

export default App;
