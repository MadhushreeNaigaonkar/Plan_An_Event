import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
      marginLeft:'35%',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


function DropDown(){
    const classes = useStyles();
  const [time, setTime] = React.useState('');

  const handleChange = (event) => {
    setTime(event.target.value);
  };
    return(
        <>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">From</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={time}
          onChange={handleChange}
          label="7:00-7:30"
        >
          <MenuItem value={10}>7:00-7:30</MenuItem>
          <MenuItem value={20}>7:00-7:30</MenuItem>
          <MenuItem value={30}>7:00-7:30</MenuItem>
        </Select>
      </FormControl>
        
        </>
    );
}

export default DropDown;