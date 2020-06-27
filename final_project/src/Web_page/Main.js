import React from 'react';
import Appbar from '../public_comp/Appbar';
import Weather from '../api_parsing'

const Main = () => {
  return (
    <>
      <Appbar />
      <Weather />
    </>
  );
};

export default Main;
