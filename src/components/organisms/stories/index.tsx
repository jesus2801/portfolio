import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import fb from 'firebase/app';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Story from '@components/atoms/story';

import { AppCtx } from '@interfaces/index';

import { StoriesDiv, StoriesTitle } from './styles';
import { StorageReference, listAll, ref } from 'firebase/storage';

SwiperCore.use([Pagination, Navigation]);

const index = () => {
  const { firebase, lng } = useSelector((state: AppCtx) => state.database);

  const [videos, setVideos] = useState([] as StorageReference[]);

  useEffect(() => {
    const r = ref(firebase.storage, 'stories')
      listAll(r)
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
        <Swiper
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          spaceBetween={50}
          slidesPerView={1}
        >
          {videos.map((reference) => (
            <SwiperSlide
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              key={reference.name}
            >
              <Story reference={reference} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StoriesDiv>
    </>
  );
};

export default index;
