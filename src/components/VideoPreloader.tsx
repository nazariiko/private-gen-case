import React from 'react';
import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
from {transform: scale(0, 0);}
to {transform: scale(1, 1);}
`;

const StyledPreloader = styled.div`
  display: inline-block;
  font-size: 0px;
  padding: 0px;

  span {
    vertical-align: middle;
    border-radius: 100%;

    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 3px 2px;
    animation: ${Animation} 0.8s linear infinite alternate;
  }

  span:nth-child(1) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    background: rgba(245, 103, 115, 0.6);
  }
  span:nth-child(2) {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
    background: rgba(245, 103, 115, 0.8);
  }
  span:nth-child(3) {
    -webkit-animation-delay: -0.26666s;
    animation-delay: -0.26666s;
    background: rgba(245, 103, 115, 1);
  }
  span:nth-child(4) {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
    background: rgba(245, 103, 115, 0.8);
  }
  span:nth-child(5) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    background: rgba(245, 103, 115, 0.4);
  }
`;

const VideoPreloader = () => {
  return (
    <StyledPreloader>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledPreloader>
  );
};

export default VideoPreloader;
