import React, { useEffect, useState } from 'react';

import { StoryProps } from '@interfaces/props';
import { StoryDiv } from './styles';

const index = ({ reference }: StoryProps) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    reference.getDownloadURL().then((downloadUrl) => {
      setUrl(downloadUrl);
    });
  }, []);

  return (
    <StoryDiv>
      <video
        src={url}
        controls={true}
        poster={`/static/stories-preview/${reference.name.split('.')[0]}.png`}
      ></video>
    </StoryDiv>
  );
};

export default index;