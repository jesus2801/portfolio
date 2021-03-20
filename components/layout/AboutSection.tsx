import React from 'react';

import helpers from '../../functions/index';

import Styles from '../../styles/layout/home/About';

const AboutSection = () => {
  const donwloadCv = async () => {
    const response: Response = await fetch('/static/icons/github.png');
    const file: Blob = await response.blob();
    const ref = window.URL || window.webkitURL;
    const url = ref.createObjectURL(file);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jesús García CV';
    a.click();
    ref.revokeObjectURL(url);
  };

  return (
    <>
      <Styles.AbsBlue2
        data="/static/abstract/abs-blue-2.svg"
        type="image/svg+xml"
      >
        Your browser not support objects
      </Styles.AbsBlue2>
      <Styles.MainZone>
        <div className="image">
          <object
            data="/static/abstract/about-image.svg"
            type="image/svg+xml"
          >
            Your browser not support objects
          </object>
        </div>
        <div className="content">
          <h2 className="title">About Me</h2>
          <div className="menu">
            <p>Life</p>
            <p className="active">knowledge</p>
          </div>
          <p className="text">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci corporis nobis ipsum cupiditate, molestias
              reprehenderit eaque quasi explicabo sint blanditiis sed quo
              nostrum earum repellendus nemo. Doloribus suscipit facere
              architecto.
            </span>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci corporis nobis ipsum cupiditate, molestias
              reprehenderit eaque quasi explicabo sint blanditiis sed quo
              nostrum earum repellendus nemo. Doloribus suscipit facere
              architecto.
            </span>
          </p>
          <button
            className="button"
            onClick={e => {
              helpers.createRipple(e);
              donwloadCv();
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
