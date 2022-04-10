import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    marginLeft:'32%',
    marginBottom:'10%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        placeholder="Enter Location"
        inputProps={{ 'aria-label': 'Enter Location' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <NavigationOutlinedIcon />
      </IconButton>
      
    </Paper>
    

  );
}
