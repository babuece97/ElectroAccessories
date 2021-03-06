import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton';
import mobileHolder from '../../../images/mobileHolder.jpeg';

const Banner = () => {
    const style = {
        minHeight: 500,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
       /*  Few part is removed for testing purpose*/
    }


    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4" sx={{ fontWeight: 600 }}>
                            Your Electronices Accosories in <br /> SINGLE CLICK
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 2, my: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto earum in eaque voluptatem accusantium velit ratione eveniet asperiores dolores labore!
                        </Typography>

                        <MuiButton>Buy Now</MuiButton>
                       
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={mobileHolder} alt="" width="100%" />
                    </Grid>
                       
                    </Grid>
               
            </Container>
        </div>
    );
};

export default Banner;