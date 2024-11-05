import React from 'react';
import CarList from './CarList';
import AppBar from '@mui/material/AppBar'; 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; 
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

function App(){
    return(
        <Container>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6'>
                        Car shop
                    </Typography>
                </Toolbar>
            </AppBar>
            <CarList />
            <CssBaseline />
        </Container> 
    )
}

export default App