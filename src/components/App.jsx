import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import useStyles from './styles';

import { Actors, MovieInformation, Movies, NavBar, Profile } from '.';

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <BrowserRouter>
                    <Routes>
                        <Route
                            path='/movie/:id'
                            element={<MovieInformation />}
                        />
                        <Route path='/actors/:id' element={<Actors />} />
                        <Route path='/' element={<Movies />} />
                        <Route path='/profile/:id' element={<Profile />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
