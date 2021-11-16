import React from 'react';
import styled from 'styled-components';
import WhiteLogoDesktop from './logo/WhiteLogoDesktop';

const StyledFooter = styled.div`
  width: 100%;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1d1d1d;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledDevelopedBy = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  p {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    color: #ffffff;
  }

  a {
    color: #ffffff;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <WhiteLogoDesktop />
      <StyledDevelopedBy>
        <p>
          Developer:{' '}
          <a href="https://t.me/nazariikovalenko" target="_blank" rel="noreferrer">
            Nazarii Kovalenko
          </a>
        </p>
      </StyledDevelopedBy>
    </StyledFooter>
  );
};

export default Footer;
