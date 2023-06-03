import React, { useEffect, useState } from 'react';

import { StoryProps } from '@interfaces/props';
import { StoryDiv } from './styles';
import { getDownloadURL } from 'firebase/storage';

const index = ({ reference }: StoryProps) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    getDownloadURL(reference).then((downloadUrl) => {
      setUrl(downloadUrl);
    });
  }, []);

  return (
    <StoryDiv
      src={url}
      controls={true}
      poster={`/static/stories-preview/${reference.name.split('.')[0]}.png`}
    ></StoryDiv>
  );
};

export default index;
