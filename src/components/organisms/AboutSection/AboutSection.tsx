import React, { MouseEvent, useRef } from 'react';
import { useSelector } from 'react-redux';

import { AboutSectionProps } from '@interfaces/props';
import { AppCtx } from '@interfaces';

import { createRipple, downloadFile } from '@functions/index';

import { objectError } from '@utils/variables';

import { AbsBlue2, AbsBlue3, MainZone } from './AboutSection.styles';

const AboutSection = ({ life, knowledge }: AboutSectionProps) => {
  const knowledgeMenuRef = useRef(null as null | HTMLParagraphElement);
  const lifeMenuRef = useRef(null as null | HTMLParagraphElement);
  const aboutTextRef = useRef(null as null | HTMLDivElement);

  const changeSection = (state: boolean) => {
    if (state) {
      lifeMenuRef.current!.classList.remove('active');
      knowledgeMenuRef.current!.classList.add('active');

      aboutTextRef.current!.classList.add('active');
    } else {
      lifeMenuRef.current!.classList.add('active');
      knowledgeMenuRef.current!.classList.remove('active');
      aboutTextRef.current!.classList.remove('active');
    }
  };

  const { firebase, lng } = useSelector((state: AppCtx) => state.database);

  const handleCvDonwload = (e: MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
    downloadFile('/static/cv.pdf', 'Jesús García CV');
    firebase.registerCVDownload();
  };

  return (
    <>
      <AbsBlue2 data="/static/abstract/abs-blue-2.svg" type="image/svg+xml" id="about-section">
        {objectError}
      </AbsBlue2>

      <MainZone>
        <div className="image">
          <object data="/static/abstract/about-image.svg" type="image/svg+xml">
            {objectError}
          </object>
        </div>
        <div className="content">
          <h2 className="title">{lng['about']}</h2>
          <div className="menu">
            <p onClick={() => changeSection(false)} ref={lifeMenuRef}>
              {lng['life']}
            </p>
            <p className="active" onClick={() => changeSection(true)} ref={knowledgeMenuRef}>
              {lng['knowledge']}
            </p>
          </div>
          <div className="text active" ref={aboutTextRef}>
            <p>{life}</p>
            <p>{knowledge}</p>
          </div>
          <button className="button" onClick={handleCvDonwload}>
            {lng['download']} Cv
          </button>
        </div>
      </MainZone>

      <AbsBlue3 data="/static/abstract/abs-blue-3.svg" type="image/svg+xml">
        {objectError}
      </AbsBlue3>
    </>
  );
};

export default AboutSection;
