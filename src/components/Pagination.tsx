import React from 'react';
import styled from 'styled-components';

interface IPaginationProps {
  onChangePage: (page: number) => void;
  page: number;
}

const StyledPagination = styled.div`
  height: 50px;
  width: 250px;
  margin-top: 30px;
  margin-left: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: 0px;
  }

  button {
    font-family: Gaegu;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 27px;

    height: 50px;
    width: 80px;
  }

  select {
    font-family: Gaegu;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 27px;
    height: 50px;
    width: 50px;
  }
`;

const Pagination: React.FC<IPaginationProps> = ({ onChangePage, page }) => {
  const onClickPrev = () => {
    onChangePage(page - 1);
  };

  const onClickNext = () => {
    onChangePage(page + 1);
  };

  return (
    <StyledPagination>
      <button onClick={onClickPrev} disabled={page === 1}>
        prev
      </button>
      <select value={page} onChange={(e) => onChangePage(+e.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select>
      <button onClick={onClickNext} disabled={page === 6}>
        next
      </button>
    </StyledPagination>
  );
};

export default Pagination;
