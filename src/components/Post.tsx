import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { formatCount } from '../helpers/formatCount';
import VideoPlayer from './VideoPlayer';

interface IPostProps {
  avatarUrl: string;
  name: string;
  text: string;
  videoUrl: string;
  commentCount: number;
  heartCount: number;
  playCount?: number;
}

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  max-width: 500px;
`;

const StyledTopInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .avatar {
    height: 50px;
    width: 50px;
    margin-right: 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .nickName {
    a {
      text-decoration: none;
    }

    span {
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      color: #000000;
    }
  }
`;

const StyledBottomInfo = styled.div`
  display: flex;

  .lineWrapper {
    min-width: 50px;
    width: 50px;
    min-height: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {
      display: none;
    }

    .line {
      width: 1px;
      height: 100%;
      background-color: rgba(239, 41, 80, 0.4);
    }
  }
`;

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;

  .textWrapper {
    margin-bottom: 20px;

    p {
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      color: #000000;
    }
  }

  .playCountWrapper {
    margin-bottom: 10px;

    p {
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #000000;

      span {
        color: #ef2950;
      }
    }
  }

  .videoWrapper {
    display: flex;
    align-items: flex-end;
    transition: all 0.3s ease-in-out;

    video {
      height: 510px;
      border-radius: 10px;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const StyledActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 600px) {
    margin-left: 0px;
    flex-direction: row;
    margin-top: 10px;
  }

  .heartAction {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 600px) {
      margin-bottom: 0px;
      margin-right: 20px;
    }

    svg {
      cursor: pointer;
      margin-bottom: 5px;
    }
  }

  .commentAction {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      cursor: pointer;
      margin-bottom: 5px;
    }
  }
`;

const Post: React.FC<IPostProps> = ({
  name,
  avatarUrl,
  text,
  videoUrl,
  commentCount,
  heartCount,
  playCount,
}) => {
  return (
    <StyledPost>
      <StyledTopInfo>
        <div className="avatar">
          <Link to={`/user/${name}`}>
            <img src={avatarUrl} alt={name} />
          </Link>
        </div>
        <div className="nickName">
          <Link to={`/user/${name}`}>
            <span>{name}</span>
          </Link>
        </div>
      </StyledTopInfo>
      <StyledBottomInfo>
        <div className="lineWrapper">
          <div className="line"></div>
        </div>
        <StyledMainContent>
          <div className="textWrapper">
            <p>{text}</p>
          </div>
          {playCount && (
            <div className="playCountWrapper">
              <p>
                Views: <span>{formatCount(playCount)}</span>
              </p>
            </div>
          )}
          <div className="videoWrapper">
            <VideoPlayer videoUrl={videoUrl} />

            <StyledActionWrapper>
              <div className="heartAction">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M24.5 35.1504L24.1797 34.8848C23.5723 34.377 22.75 33.8262 21.7969 33.1895C18.084 30.7031 13 27.3008 13 21.5C13 17.916 15.916 15 19.5 15C21.4473 15 23.2715 15.8672 24.5 17.3496C25.7285 15.8672 27.5527 15 29.5 15C33.084 15 36 17.916 36 21.5C36 27.3008 30.916 30.7031 27.2031 33.1895C26.25 33.8262 25.4277 34.377 24.8203 34.8848L24.5 35.1504Z"
                    fill="black"
                  />
                </svg>
                <span>{formatCount(heartCount)}</span>
              </div>

              <div className="commentAction">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z"
                    fill="#F1F1F1"
                  />
                  <path
                    d="M24.5 15C18.1504 15 13 19.5 13 25C13 28.0996 14.6504 31.0508 17.5 32.9004C17.4492 33.4492 17.1504 34.6992 16.0996 36.1992L15.5508 37H16.5508C19.25 37 21.0996 35.3496 21.6992 34.6992C22.5996 34.9004 23.5508 35 24.5 35C30.8496 35 36 30.5 36 25C36 19.5 30.8496 15 24.5 15ZM19.5 26C18.9492 26 18.5 25.5508 18.5 25C18.5 24.4492 18.9492 24 19.5 24C20.0508 24 20.5 24.4492 20.5 25C20.5 25.5508 20.0508 26 19.5 26ZM24.5 26C23.9492 26 23.5 25.5508 23.5 25C23.5 24.4492 23.9492 24 24.5 24C25.0508 24 25.5 24.4492 25.5 25C25.5 25.5508 25.0508 26 24.5 26ZM29.5 26C28.9492 26 28.5 25.5508 28.5 25C28.5 24.4492 28.9492 24 29.5 24C30.0508 24 30.5 24.4492 30.5 25C30.5 25.5508 30.0508 26 29.5 26Z"
                    fill="black"
                  />
                </svg>
                <span>{formatCount(commentCount)}</span>
              </div>
            </StyledActionWrapper>
          </div>
        </StyledMainContent>
      </StyledBottomInfo>
    </StyledPost>
  );
};

export default React.memo(Post);
