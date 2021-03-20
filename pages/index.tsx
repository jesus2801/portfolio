import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { NextPageContext, NextPage } from 'next';

import Styles from '../styles/layout/index';

const Index: NextPage<NextPageContext> = () => {
  const typerTexts = ['Web developer', 'Full Stack', 'Apps Developer'];
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
        setTimeout(() => {
          typer();
        }, 3000);
        return;
      }
      i++;
    }, 100);
  };

  useEffect(() => {
    p = document.getElementById('typer');
    typer();
    const bar = document.getElementById('bar');
    setInterval(() => {
      bar!.innerText = bar!.innerText === '|' ? '' : '|';
    }, 300);
  });

  return (
    <Layout title="Jesús García's Portfolio">
      <Styles.AbsBlue1
        data="/static/abstract/abs-blue-1.svg"
        type="image/svg+xml"
      >
        Your browser not support objects
      </Styles.AbsBlue1>

      <Styles.MainZone>
        <div>
          <h1>Jesús García</h1>
          <p>
            {' '}
            <span id="typer"></span>
            <span id="bar">|</span>
          </p>
          <button>LinkedIn</button>
        </div>
        <div></div>
      </Styles.MainZone>
    </Layout>
  );
};

export default Index;
