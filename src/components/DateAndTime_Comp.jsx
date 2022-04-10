import React, { useState } from 'react';
import DateMomentUtils from '@date-io/moment'; // choose your lib
import { DatePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
  
    marginLeft:theme.spacing(1),
    width: 'fit-content',
    
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    padding:'2px',
    

  },
})
);
function DateAndTime_Comp(){
  const [date, changeDate] = useState(new Date());
  const classes = useStyles();
    return(
        <>
       <MuiPickersUtilsProvider utils={DateMomentUtils} className={classes.root}>
        <DatePicker className={classes.root}
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate} />
        </MuiPickersUtilsProvider>
        </>
    );
}

export default DateAndTime_Comp;