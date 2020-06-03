import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../styles/js/palette';
import Button from '../public_comp/Button';
import Box from '@material-ui/core';

function AuthTemplate({ children }) {
  return (
    <div>
      {children}
      <Box component="span" m={1}>
        <Button />
      </Box>
    </div>
  );
}

export default AuthTemplate;
