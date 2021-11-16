import React from 'react';
import ContentLoader from 'react-content-loader';

const PostPreloader = () => (
  <ContentLoader
    speed={1}
    width={290}
    height={620}
    viewBox="0 0 290 620"
    backgroundColor="#d4d4d4"
    foregroundColor="#f8fafc">
    <rect x="0" y="0" rx="25" ry="25" width="50" height="50" />
    <rect x="70" y="15" rx="5" ry="5" width="150" height="20" />
    <rect x="0" y="70" rx="5" ry="5" width="254" height="20" />
    <rect x="0" y="110" rx="10" ry="10" width="290" height="510" />
  </ContentLoader>
);

export default PostPreloader;
