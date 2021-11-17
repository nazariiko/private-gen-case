import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';

import useVideoPlayer from '../hooks/useVideoPlayer';
import { toggleSound } from '../redux/action-creators/sound';
import VideoPreloader from './VideoPreloader';

interface IVideoPlayerProps {
  videoUrl: string;
}

interface IStyledVideoPlayerProps {
  isPlaying: boolean;
}

const StyledVideoPlayer = styled.div`
  height: 510px;
  max-width: 290px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  @media (hover) {
    &:hover .controls {
      display: flex;
    }
  }
`;

const StyledControlPause = styled.div<IStyledVideoPlayerProps>`
  height: 100%;
  width: 100%;
  display: ${(props) => (props.isPlaying ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: absolute;
  top: 0;

  svg {
    cursor: pointer;
  }
`;

const StyledControlSound = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  bottom: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoadingAnimation = styled.div`
  height: 100%;
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ videoUrl }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { isPlaying, isLoading, togglePlay, setIsLoading, pauseVideo, playVideo, setTimeToZero } =
    useVideoPlayer(videoRef);
  const dispatch = useDispatch();
  const { isMuted } = useTypedSelector((state) => state.sound);

  const catchClickOnAnotherVideo = (e: any) => {
    let nodeVideoWrapper = e.path.find((node: any) => {
      return node.classList?.contains('videoPlayer');
    });

    if (Boolean(nodeVideoWrapper) && nodeVideoWrapper.firstChild?.src !== videoUrl) {
      pauseVideo();
      setTimeToZero();
      setTimeout(() => {
        setIsLoading(false);
      }, 0);
    }
  };

  const checkIfInViewport = () => {
    if (videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      let isInViewport =
        rect.top >= -250 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      if (!isInViewport) {
        pauseVideo();
        setIsLoading(false);
      } else {
        playVideo();
      }
    }
  };

  const toggleMute = () => {
    dispatch(toggleSound());
  };

  React.useEffect(() => {
    document.body.addEventListener('click', catchClickOnAnotherVideo);
    window.addEventListener('scroll', checkIfInViewport);

    return () => {
      document.body.removeEventListener('click', catchClickOnAnotherVideo);
      window.removeEventListener('scroll', checkIfInViewport);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <StyledVideoPlayer className="videoPlayer">
      <video ref={videoRef} src={videoUrl} loop muted onClick={togglePlay} playsInline />
      <StyledControlPause className="controls" onClick={togglePlay} isPlaying={isPlaying}>
        {isPlaying ? (
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V42H22V8H12ZM28 8V42H38V8H28Z" fill="white" />
          </svg>
        ) : (
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5.25V44.25L43.1487 24.7519L10 5.25Z" fill="white" />
          </svg>
        )}
      </StyledControlPause>
      <StyledControlSound onClick={toggleMute}>
        {isMuted ? (
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_28_6)">
              <path
                d="M12.0938 1.5C11.6387 1.5 11.166 1.71875 10.7812 2.10938L4.96875 7.90625C4.64844 8.18945 4.5 8.73828 4.5 9.125V15.875C4.5 16.2578 4.6582 16.8047 4.95312 17.0625L10.75 22.8438C11.2773 23.3809 11.7637 23.5 12.0781 23.5C12.9121 23.5 13.5 22.7383 13.5 21.6563V3.15625C13.5 2.01758 12.7695 1.5 12.0938 1.5ZM1.5 7.98438C0.662109 7.98438 -0.015625 8.66211 -0.015625 9.5V15.5C-0.015625 16.3379 0.662109 17.0156 1.5 17.0156H3.73438C3.57031 16.623 3.5 16.2051 3.5 15.875V9.125C3.5 8.79688 3.58203 8.38086 3.75 7.98438H1.5ZM15.9531 9.48438C15.9316 9.48828 15.9102 9.49414 15.8906 9.5C15.7031 9.5332 15.5527 9.66992 15.5 9.85156C15.4473 10.0352 15.502 10.2305 15.6406 10.3594L17.7812 12.5L15.6406 14.6406C15.4414 14.8398 15.4414 15.1602 15.6406 15.3594C15.8398 15.5586 16.1602 15.5586 16.3594 15.3594L18.5 13.2188L20.6406 15.3594C20.8398 15.5586 21.1602 15.5586 21.3594 15.3594C21.5586 15.1602 21.5586 14.8398 21.3594 14.6406L19.2188 12.5L21.3594 10.3594C21.5215 10.209 21.5645 9.9707 21.4668 9.77344C21.3711 9.57422 21.1543 9.46484 20.9375 9.5C20.8262 9.51172 20.7207 9.5625 20.6406 9.64063L18.5 11.7813L16.3594 9.64063C16.2559 9.5293 16.1055 9.47266 15.9531 9.48438Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_28_6">
                <rect width="25" height="25" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ) : (
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.0996 1.5C11.6496 1.5 11.1998 1.69961 10.7998 2.09961L4.9502 7.90039C4.6502 8.20039 4.5 8.74961 4.5 9.09961V15.8496C4.5 16.2496 4.6502 16.7498 4.9502 17.0498L10.75 22.8496C11.3 23.3996 11.7496 23.5 12.0996 23.5C12.9496 23.5 13.5 22.7504 13.5 21.6504V3.15039C13.5 2.00039 12.7496 1.5 12.0996 1.5ZM1.5 7.9502C0.65 7.9502 0 8.6502 0 9.4502V15.4502C0 16.3002 0.7 16.9502 1.5 16.9502H3.75C3.6 16.6502 3.5 16.2004 3.5 15.9004V9.09961C3.5 8.74961 3.55 8.3502 3.75 7.9502H1.5ZM15.3184 9.19922C15.1976 9.2052 15.0831 9.25476 14.996 9.3387C14.9089 9.42265 14.8553 9.5353 14.8449 9.65578C14.8345 9.77627 14.8682 9.89643 14.9396 9.99402C15.011 10.0916 15.1154 10.16 15.2334 10.1865C16.2544 10.4316 17 11.3722 17 12.5C17 13.6278 16.2629 14.5249 15.2148 14.8184C15.1505 14.835 15.09 14.8643 15.0371 14.9046C14.9842 14.9449 14.9399 14.9953 14.9067 15.053C14.8735 15.1106 14.8521 15.1743 14.8439 15.2403C14.8356 15.3063 14.8406 15.3732 14.8585 15.4373C14.8764 15.5013 14.9069 15.5611 14.9483 15.6132C14.9896 15.6653 15.0409 15.7087 15.0992 15.7407C15.1575 15.7727 15.2216 15.7928 15.2877 15.7998C15.3538 15.8067 15.4207 15.8004 15.4844 15.7812C16.9363 15.3747 18 14.0722 18 12.5C18 10.9278 16.9458 9.56883 15.4668 9.21387C15.4183 9.20159 15.3683 9.19665 15.3184 9.19922V9.19922Z"
              fill="white"
            />
          </svg>
        )}
      </StyledControlSound>
      {isLoading && (
        <StyledLoadingAnimation>
          <VideoPreloader />
        </StyledLoadingAnimation>
      )}
    </StyledVideoPlayer>
  );
};

export default VideoPlayer;
