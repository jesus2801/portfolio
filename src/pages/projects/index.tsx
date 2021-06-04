import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { getProject } from '@context/actions/database.actions';

import Footer from '@components/molecules/Footer/Footer';
import Layout from '@components/templates/Layout/Layout';

import { AppCtx, ProjectLayout } from '@interfaces';

import { createRipple } from '@functions/index';

import {
  MainCtn,
  Title,
  Text,
  DeployTxt,
  GitButton,
  YoutubeVideo,
} from '@styles/index';

const Project = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const [project, setProject] = useState({} as ProjectLayout);

  const dispatch = useDispatch();

  const { firebase, loading, projectSelected } = useSelector(
    (state: AppCtx) => state.database,
  );

  useEffect(() => {
    if (id) {
      dispatch(getProject(id as string, firebase));
    }
  }, [id]);

  useEffect(() => {
    if (!loading) {
      if (projectSelected) {
        setProject(projectSelected);
        return;
      }
      router.push('/');
    }
  }, [projectSelected, loading]);

  return (
    project && (
      <>
        <Layout title={`Jesús García's Portfolio | ${project.title}`}>
          <MainCtn>
            <Title>{project.title}</Title>
            <Text>{project.desc}</Text>
            <YoutubeVideo
              src={project.videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></YoutubeVideo>
            <Text>{project.mainText}</Text>
            {project.deploy && (
              <DeployTxt className="deploy">
                <b>Deploy:</b>
                {` `}
                <a href={project.deploy} rel="noreferrer, no follow" target="_blank">
                  {project.deploy}
                </a>
              </DeployTxt>
            )}
            <GitButton
              href={project.git}
              rel="noreferrer, no follow"
              target="_blank"
              onClick={() => firebase.registerVisitGithub()}
            >
              <button className="button" onClick={createRipple}>
                <img src="/static/icons/github.png" alt="Github icon" />
                Github
              </button>
            </GitButton>
          </MainCtn>
          <Footer />
        </Layout>
      </>
    )
  );
};

export default Project;
