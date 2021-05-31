import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { LandingProps } from '@interfaces/props';
import { AppCtx } from '@interfaces';

import { objectError } from '@utils/variables';

import { createRipple } from '@functions/index';

import useTyper from '@hooks/useTyper';

import { AbsBlue1, MainZone } from './Landing.styles';

const typerTexts: string[] = [
  'Full Stack Web Developer',
  'Passionate about computing and robotics',
  'Backend and Frontend developer',
  'Cross-platform software developer',
];

const Landing = ({ title }: LandingProps) => {
  const typerRef = useRef(null as null | HTMLSpanElement);
  const barRef = useRef(null as null | HTMLSpanElement);

  useEffect(() => {
    if (typerRef.current && barRef.current) {
      useTyper(typerTexts, typerRef.current, barRef.current);
    }
  }, [typerRef, barRef]);

  const firebase = useSelector((state: AppCtx) => state.database.firebase);

  return (
    <>
      <AbsBlue1 data="/static/abstract/abs-blue-1.svg" type="image/svg+xml" id="start-section">
        {objectError}
      </AbsBlue1>

      <MainZone>
        <div className="info">
          <h1 className="title">{title}</h1>

          <p>
            <span ref={typerRef}></span>
            <span ref={barRef}>|</span>
          </p>

          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/jesús-david-garcía-vargas-3a5a13206"
              rel="noreferrer, no follow"
              target="_blank"
              onClick={() => firebase.registerVisitLinkedin()}
            >
              <button className="button" onClick={createRipple}>
                <img src="/static/icons/linkedin.png" alt="LinkedIn icon" />
                LinkedIn
              </button>
            </a>
            <a
              href="https://github.com/jesus2801"
              rel="noreferrer, no follow"
              target="_blank"
              onClick={() => firebase.registerVisitGithub()}
            >
              <button className="button" onClick={createRipple}>
                <img src="/static/icons/github.png" alt="Github icon" />
                Github
              </button>
            </a>
          </div>
        </div>

        <div>
          <object data="/static/images/main-image.svg" type="image/svg+xml">
            {objectError}
          </object>
        </div>
      </MainZone>
    </>
  );
};

export default Landing;
