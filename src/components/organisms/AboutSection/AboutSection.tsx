import { useSelector } from 'react-redux';
import { NextPage } from 'next';
import React from 'react';

import helpers from '@functions/index';

import { AboutSectionCtx, AppCtx } from '@interfaces';

import { objectError } from '@utils/variables';

import { AbsBlue2, AbsBlue3, MainZone } from './AboutSection.styles';

const AboutSection: NextPage<AboutSectionCtx> = ({ life, knowledge }) => {
  const changeSection = (state: boolean) => {
    if (state) {
      document.getElementById('life-menu')!.classList.remove('active');
      document.getElementById('knowledge-menu')!.classList.add('active');

      document.getElementById('about-text')!.classList.add('active');
    } else {
      document.getElementById('life-menu')!.classList.add('active');
      document
        .getElementById('knowledge-menu')!
        .classList.remove('active');
      document.getElementById('about-text')!.classList.remove('active');
    }
  };

  const firebase = useSelector(
    (state: AppCtx) => state.database.firebase
  );

  return (
    <>
      <AbsBlue2
        data="/static/abstract/abs-blue-2.svg"
        type="image/svg+xml"
        id="about-section"
      >
        {objectError}
      </AbsBlue2>

      <MainZone>
        <div className="image">
          <object
            data="/static/abstract/about-image.svg"
            type="image/svg+xml"
          >
            {objectError}
          </object>
        </div>
        <div className="content">
          <h2 className="title">About Me</h2>
          <div className="menu">
            <p onClick={() => changeSection(false)} id="life-menu">
              Life
            </p>
            <p
              className="active"
              onClick={() => changeSection(true)}
              id="knowledge-menu"
            >
              knowledge
            </p>
          </div>
          <div className="text active" id="about-text">
            <p>{life}</p>
            <p>{knowledge}</p>
          </div>
          <button
            className="button"
            onClick={e => {
              helpers.createRipple(e);
              helpers.downloadFile('/static/cv.pdf', 'Jesús García CV');
              firebase.registerCVDownload();
            }}
          >
            Download Cv
          </button>
        </div>
      </MainZone>

      <AbsBlue3
        data="/static/abstract/abs-blue-3.svg"
        type="image/svg+xml"
      >
        {objectError}
      </AbsBlue3>
    </>
  );
};

export default AboutSection;
