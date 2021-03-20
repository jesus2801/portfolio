import React, { useEffect } from 'react';
import Styles from '../../styles/layout/home/index';

import helpers from '../../functions/index';

const Landing = () => {
  const typerTexts = [
    'Full Stack Web Developer',
    'Passionate about computing and robotics',
    'Backend and Frontend developer',
    'Positive person and adaptable to change',
  ];
  let p: any;

  const arrayLength = typerTexts.length - 1;
  let arrayIndex = 0;

  let i = 0;
  let textLength = typerTexts[arrayIndex].length - 1;

  const typer = () => {
    p.innerText = '';

    const interval = setInterval(() => {
      p.innerText += typerTexts[arrayIndex][i];
      if (i === textLength) {
        clearInterval(interval);
        arrayIndex = arrayLength === arrayIndex ? 0 : arrayIndex + 1;
        i = 0;
        textLength = typerTexts[arrayIndex].length - 1;
        setTimeout(() => typer(), 3700);
        return;
      }
      i++;
    }, 100);
  };

  useEffect(() => {
    p = document.getElementById('typer');
    // typer();
    const bar = document.getElementById('bar');
    setInterval(() => bar!.classList.toggle('ocult'), 300);
  });
  return (
    <>
      <Styles.AbsBlue1
        data="/static/abstract/abs-blue-1.svg"
        type="image/svg+xml"
      >
        Your browser not support objects
      </Styles.AbsBlue1>

      <Styles.MainZone>
        <div className="info">
          <h1 className="title">Jesús García</h1>

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
            Your browser not support objects
          </object>
        </div>
      </Styles.MainZone>
    </>
  );
};

export default Landing;
