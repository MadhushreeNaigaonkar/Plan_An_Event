import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DateAndTime_Comp from '../components/DateAndTime_Comp';
import DropDown from '../components/DropDown';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Navigation from '../components/Navigation';
const useStyles = makeStyles((theme) => ({
    root: {
  
      width: 'fit-content',
      alignContent:'center',
    //   alignItems:'left',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: '5px',
      padding:'2rem',
  
    },
    header:{
        padding:'20rem',
        margintop:'3rem',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'20%',
    },
    title:{
        paddingLeft:'1rem',
        paddingRight:'2rem',
        marginLeft:'2px',
    },
  })
  );

function Home(){
    const classes = useStyles();
    return(
        <>
        <Container maxWidth="lg" >
            <Menu />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Typography variant="h4" component="h2" className={classes.title}>Search Event  </Typography>
            <br />
            <Header className={classes.root}/>
            <br />
            <br />
            <br />
            <Typography variant="h4" component="h2" className={classes.title}>Select Date  </Typography>
            <br/>
            <br/>
            <DateAndTime_Comp  className={classes.root}/>
            <br />
            <br />
            <br />
            <Typography variant="h4" component="h2" className={classes.title}>Select Time </Typography>
            <br />
            <br />
            <DropDown className={classes.root}/>

            <br />
            <br />
            <br />
            <Typography variant="h4" component="h2" className={classes.title}> Select Location  </Typography>
            <br />
            <br />
            <Navigation className={classes.root}  />
            
        




        </Container>
        
        
        
        
        </>
    );
}

export default Home;