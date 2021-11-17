import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import BlackLogoDesktop from './logo/BlackLogoDesktop';

const StyledHeader = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  a {
    margin-left: 25px;
    position: relative;
    top: 5px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/trends">
        <BlackLogoDesktop />
      </Link>
    </StyledHeader>
  );
};

export default Header;
