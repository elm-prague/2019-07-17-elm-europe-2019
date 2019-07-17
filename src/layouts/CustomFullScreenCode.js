import React from 'react';
import styled from '@emotion/styled';

export const CustomFullScreenCode = styled.div({
  textAlign: 'left',
  maxWidth: '100%',
  width: '100%',
  minWidth: '100%',
  flex: 1,
  '& pre': {
    // needed to override inline styles from syntax highlighting
    margin: '0 !important',
    width: '100%',
    minWidth: 0,
    maxWidth: '100%',
    height: '100%',
    overflow: 'auto',
    fontSize: '0.5em',
  },
});
