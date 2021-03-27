import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/layout/Footer';

import Styles from '../../styles/layout/Project/index';
import { useDispatch, useSelector } from 'react-redux';
import { getProject } from '../../context/actions/database.actions';
import { AppCtx, ProjectLayout } from '../../interfaces';
import { objectError } from '../../utils/variables';

const Project = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;
  const [project, setProject] = useState({} as ProjectLayout);

  const dispatch = useDispatch();

  const { firebase, loading, projectSelected } = useSelector(
    (state: AppCtx) => state.database
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
        <Styles.MainCtn>
          <Styles.Ribbon
            data="/static/images/ribbon.svg"
            type="image/svg+xml"
          >
            {objectError}
          </Styles.Ribbon>
          <Styles.Title>{project.title}</Styles.Title>
          <Styles.Text>{project.desc}</Styles.Text>
          <Styles.YoutubeVideo
            src={project.videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Styles.YoutubeVideo>
          <Styles.Text>{project.mainText}</Styles.Text>
        </Styles.MainCtn>
        <Footer />
      </>
    )
  );
};

export default Project;
