import React from 'react';
import ContentLoader from 'react-content-loader';

const UserPleloader = () => (
  <ContentLoader
    speed={1}
    width={300}
    height={285}
    viewBox="0 0 300 330"
    backgroundColor="#d4d4d4"
    foregroundColor="#f8fafc">
    <rect x="0" y="0" rx="50" ry="50" width="100" height="100" />
    <rect x="131" y="35" rx="6" ry="6" width="150" height="25" />
    <rect x="0" y="120" rx="5" ry="5" width="200" height="20" />
    <rect x="0" y="160" rx="5" ry="5" width="200" height="20" />
    <rect x="0" y="200" rx="5" ry="5" width="200" height="20" />
    <rect x="0" y="257" rx="6" ry="6" width="150" height="25" />
  </ContentLoader>
);

export default UserPleloader;
