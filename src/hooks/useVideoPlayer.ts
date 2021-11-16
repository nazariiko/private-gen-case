import React from 'react';

const useVideoPlayer = (videoElement: React.RefObject<HTMLVideoElement>) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (videoElement.current) {
      videoElement.current.onwaiting = function () {
        setIsLoading(true);
      };
      videoElement.current.onplaying = function () {
        setIsLoading(false);
      };
    }
  }, [videoElement]);

  React.useEffect(() => {
    isPlaying ? videoElement.current?.play() : videoElement.current?.pause();
  }, [isPlaying, videoElement]);

  const togglePlay = () => {
    setIsPlaying((prev) => {
      setIsLoading(false);
      return !prev;
    });
  };

  const pauseVideo = () => {
    setIsPlaying(false);
  };

  const playVideo = () => {
    setIsPlaying(true);
  };

  const setTimeToZero = () => {
    if (videoElement.current) {
      videoElement.current.currentTime = 0;
    }
  };

  return {
    isLoading,
    isPlaying,
    setIsLoading,
    togglePlay,
    pauseVideo,
    playVideo,
    setTimeToZero,
  };
};

export default useVideoPlayer;
