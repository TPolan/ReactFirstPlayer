import React from 'react';
import './App.css';
import 'fontsource-roboto';
import {Grid, Typography} from '@material-ui/core';
import PlayerPool from './components/PlayerPool';
import AddPlayerForm from "./components/AddPlayerForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Grid>
                    <Typography variant={'h2'} color={'primary'}>
                        Choose a first random player
                    </Typography>
                    <AddPlayerForm/>
                    <PlayerPool/>
                </Grid>
            </header>
        </div>
    );
}

export default App;
