import React from 'react';
import {Grid} from '@mui/material';


const GridScreen=()=>{
return(
  <Grid item xs={12} container spacing={2} className='Grid-container'>
    <Grid item lg={4} sm={6} xs={12} style={backgroundColor='pink'}>Blockchain Development</Grid>
    <Grid item lg={4} sm={6} xs={12} >Mobile Application Development</Grid>
    <Grid item lg={4} sm={6} xs={12} >Web Apis</Grid>
    <Grid item lg={4} sm={6} xs={12} >Exchange Platform Developtment</Grid>
    <Grid item lg={4} sm={6} xs={12} >Wallet Development</Grid>
    <Grid item lg={4} sm={6} xs={12} >Blockchain Development</Grid>

  </Grid>
    
)
}

export default GridScreen;
