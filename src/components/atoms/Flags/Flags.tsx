import { setSelectedLng } from '@context/actions/database.actions';
import { AppLngs } from '@interfaces/index';
import React from 'react';
import { useDispatch } from 'react-redux';
import { FlagsDiv } from './Flags.styles';

const Flags = () => {
  const dispatch = useDispatch();

  const handleLng = (lng: AppLngs) => {
    dispatch(setSelectedLng(lng));
  };

  return (
    <FlagsDiv>
      <img src="/static/icons/usa.webp" onClick={() => handleLng('en')} alt="spain icon" />
      <img
        src="/static/icons/es.webp"
        onClick={() => handleLng('es')}
        alt="united states icon"
      />
    </FlagsDiv>
  );
};

export default Flags;
