import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppCtx } from '../../interfaces';

import Styles from '../../styles/UI/StartSections';

import { blue, black } from '../../utils/variables';

const StartSection = () => {
  const isLoading = useSelector(
    (state: AppCtx) => state.database.loading
  );

  useEffect(() => {
    if (!isLoading) {
      document.querySelector('.loader')!.classList.add('active');
      document.getElementById('loading-title')!.classList.add('active');
      setTimeout(() => {
        document.querySelector('.loader')!.classList.add('ocult');
        document.getElementById('loading-title')!.classList.add('ocult');
        document.getElementById('start-button')!.classList.add('active');
      }, 450);
    }
  }, [isLoading]);

  return (
    <Styles.MainCtn id="loader-div">
      <svg className="loader">
        <g>
          <path d="M 50,100 A 1,1 0 0 1 50,0" />
        </g>
        <g>
          <path d="M 50,75 A 1,1 0 0 0 50,-25" />
        </g>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{
                stopColor: `${blue}`,
                stopOpacity: 1,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: `${black}`,
                stopOpacity: 1,
              }}
            />
          </linearGradient>
        </defs>
      </svg>

      <h2 id="loading-title">Loading</h2>
      <button
        id="start-button"
        onClick={() =>
          document.getElementById('loader-div')!.classList.add('ocult')
        }
      >
        Let's Start!
      </button>
    </Styles.MainCtn>
  );
};

export default StartSection;
