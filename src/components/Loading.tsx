import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    width: '300px',
  },
}));

export default function Loadding() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <LinearProgress />
      </div>
    </div>
  );
}
