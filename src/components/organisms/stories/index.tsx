import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import fb from 'firebase/app';

import Story from '@components/atoms/story';

import { AppCtx } from '@interfaces/index';

import { StoriesDiv, StoriesTitle } from './styles';

const index = () => {
  const { firebase, lng } = useSelector((state: AppCtx) => state.database);

  const [videos, setVideos] = useState([] as fb.storage.Reference[]);

  useEffect(() => {
    firebase.storage
      .ref('stories')
      .listAll()
      .then((results) => {
        setVideos(results.items);
      });
  }, []);

  return (
    <>
      <StoriesTitle>
        <h2 className="title">{lng['stories']}</h2>
        <p>{lng['storiesDesc']}</p>
      </StoriesTitle>
      <StoriesDiv>
        {videos.map((reference) => (
          <Story key={reference.name} reference={reference} />
        ))}
      </StoriesDiv>
    </>
  );
};

export default index;
