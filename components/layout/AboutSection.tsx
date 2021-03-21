import { NextPage } from 'next';
import React from 'react';

import helpers from '../../functions/index';
import { AboutSectionCtx } from '../../interfaces';

import Styles from '../../styles/layout/home/About';
import { objectError } from '../../utils/variables';

const AboutSection: NextPage<AboutSectionCtx> = ({ life, knowledge }) => {
  return (
    <>
      <Styles.AbsBlue2
        data="/static/abstract/abs-blue-2.svg"
        type="image/svg+xml"
        id="about-section"
      >
        {objectError}
      </Styles.AbsBlue2>
      <Styles.MainZone>
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
            <p>Life</p>
            <p className="active">knowledge</p>
          </div>
          <p className="text">
            <span>{life}</span>
            <span>{knowledge}</span>
          </p>
          <button
            className="button"
            onClick={e => {
              helpers.createRipple(e);
              helpers.downloadFile('/static/cv.pdf', 'Jesús García CV');
            }}
          >
            Download Cv
          </button>
        </div>
      </Styles.MainZone>
    </>
  );
};

export default AboutSection;
