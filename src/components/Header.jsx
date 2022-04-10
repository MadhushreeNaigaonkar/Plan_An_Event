import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import RoomIcon from '@material-ui/icons/Room';
import EventIcon from '@material-ui/icons/Event';
import '@fontsource/roboto';
import SearchIcon from '@material-ui/icons/Search';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
      marginLeft:'15%',
      width: 'fit-content',
      alignContent:'center',
      alignItems:'center',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: '5px',
      padding:'2px',
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      '& svg': {
        margin: theme.spacing(1.5),
      },
      '& hr': {
        margin: theme.spacing(0, 0.5),
      },

    },
    title:{
        paddingLeft:'1rem',
        paddingRight:'2rem',
        marginLeft:'2px',
    },
    icon:{
        paddingLeft:'1rem',
        paddingRight:'0.5rem'
    },
    button:{
        backgroundColor:'#3F51B5',
        color:'#FFFFFF',
       
        boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,    
      boxShadow: 'none',
     ' & > *': {
        margin: theme.spacing(1),
      },
      '&:hover':{
        backgroundColor: '#3F51B5',
        borderColor: '#3F51B5',
        boxShadow: 'none',
      }
    }

  }));

  function Header(){
    const classes = useStyles();
      return(
          <>
          
        <Grid container alignItems="center" className={classes.root}>
        <RoomIcon className={classes.icon}/>
        <Typography variant="h6" component="h2" className={classes.title}>Location  </Typography>
        <Divider orientation="vertical" flexItem />
        <SearchIcon className={classes.icon} />
        <Typography variant="h6" component="h2"className={classes.title}>Search  </Typography>
        <Divider orientation="vertical" flexItem />
        <EventIcon className={classes.icon}/>
        <Typography variant="h6" component="h2" className={classes.title}>Date and time  </Typography>
        <Button variant="contained"  className={classes.button}>Search</Button>

        
       
        
        </Grid>
          </>
      );
  }

  export default Header;
