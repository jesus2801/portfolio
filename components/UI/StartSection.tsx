import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppCtx } from '../../interfaces';

import Styles from '../../styles/UI/StartSections';

import { blue, black } from '../../utils/variables';
import Swept from './Swept';

const StartSection = () => {
  const [start, setStart] = useState(false);

  const isLoading = useSelector(
    (state: AppCtx) => state.database.loading
  );

  useEffect(() => {
    if (!isLoading) {
      document.querySelector('.loader')!.classList.add('active');
      setTimeout(() => {
        document.querySelector('.loader')!.classList.add('ocult');
        document.getElementById('start-button')!.classList.add('active');
      }, 450);
    }
  }, [isLoading]);

  return (
    <>
      <Styles.MainCtn id="loader-div">
        <svg className="loader">
          <g>
            <path d="M 50,100 A 1,1 0 0 1 50,0" />
          </g>
          <g>
            <path d="M 50,75 A 1,1 0 0 0 50,-25" />
          </g>
          <defs>
            <linearGradient
              id="gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
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

        <button
          id="start-button"
          onClick={() => {
            document.getElementById('loader-div')!.classList.add('ocult');
            setStart(true);
          }}
        >
          Let's Start!
        </button>
      </Styles.MainCtn>
      <Swept start={start} />
    </>
  );
};

export default StartSection;
