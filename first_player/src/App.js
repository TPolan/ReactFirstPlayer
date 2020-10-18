import React, {useState} from 'react';
import './App.css';
import 'fontsource-roboto';
import {makeStyles ,Typography, Grid, Container, Button, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import PlayerCard from './components/PlayerCard';
import PlayerPool from  './components/PlayerPool';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Grid>
                    <Typography variant={'h2'} color={'primary'}>
                        Choose a first random player
                    </Typography>
                        <FormControl color={"secondary"}>
                            <InputLabel htmlFor="my-input">Player Name</InputLabel>
                            <Input onChange={handleChange} value={playerInput} id="my-input"
                                   aria-describedby="my-helper-text"/>
                            <FormHelperText id="my-helper-text">Add new players to the pool</FormHelperText>
                        </FormControl>
                        <Button
                            onClick={handleAddPlayer}
                            variant="contained"
                            color="primary">
                            Add Player
                        </Button>
                        <PlayerPool/>
                </Grid>
            </header>
        </div>
    );
}

export default App;
