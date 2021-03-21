import React, { useEffect } from 'react';
import { NextPage } from 'next';

import Styles from '../../styles/layout/home/index';

import helpers from '../../functions/index';
import { objectError } from '../../utils/variables';
import useTyper from '../../hooks/useTyper';

import { LandingCtx } from '../../interfaces';

const Landing: NextPage<LandingCtx> = ({ title }) => {
  const typerTexts: string[] = [
    'Full Stack Web Developer',
    'Passionate about computing and robotics',
    'Backend and Frontend developer',
    'Positive person and adaptable to change',
  ];

  useEffect(() => {
    // const p: HTMLParagraphElement = document.getElementById(
    //   'typer'
    // ) as HTMLParagraphElement;
    // const typer = useTyper(typerTexts, p);
    // typer();
    const bar = document.getElementById('bar');
    setInterval(() => bar!.classList.toggle('ocult'), 300);
  });

  return (
    <>
      <Styles.AbsBlue1
        data="/static/abstract/abs-blue-1.svg"
        type="image/svg+xml"
        id="start-section"
      >
        {objectError}
      </Styles.AbsBlue1>

      <Styles.MainZone>
        <div className="info">
          <h1 className="title">{title}</h1>

          <p>
            <span id="typer"></span>
            <span id="bar">|</span>
          </p>

          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/jesús-david-garcía-vargas-3a5a13206"
              rel="noreferrer, no follow"
              target="_blank"
            >
              <button className="button" onClick={helpers.createRipple}>
                <img
                  src="/static/icons/linkedin.png"
                  alt="LinkedIn icon"
                />
                LinkedIn
              </button>
            </a>
            <a
              href="https://github.com/jesus2801"
              rel="noreferrer, no follow"
              target="_blank"
            >
              <button className="button" onClick={helpers.createRipple}>
                <img src="/static/icons/github.png" alt="LinkedIn icon" />{' '}
                Github
              </button>
            </a>
          </div>
        </div>

        <div>
          <object
            data="/static/images/main-image.svg"
            type="image/svg+xml"
          >
            {objectError}
          </object>
        </div>
      </Styles.MainZone>
    </>
  );
};

export default Landing;
