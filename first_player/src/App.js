import React from 'react';
import './App.css';
import 'fontsource-roboto';
import {Grid, Typography} from '@material-ui/core';
import PlayerPool from './components/PlayerPool';
import AddPlayerForm from "./components/AddPlayerForm";
import FirstPlayerPresenter from "./components/FirstPlayerPresenter";
import TeamsPresenter from "./components/TeamsPresenter";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Grid style={{
                    borderWidth: 2,
                    borderStyle: "solid",
                    borderColor: "blue"
                }}>
                    <Typography variant={'h2'} color={'primary'}>
                        PLAYER RANDOMIZER
                    </Typography>
                    <AddPlayerForm/>
                    <PlayerPool/>
                    <Grid container justify={"center"} style={{padding:10}}>
                        <Grid item>
                        <FirstPlayerPresenter/>
                        </Grid>
                        <Grid item>
                            <TeamsPresenter/>
                        </Grid>


                    </Grid>
                </Grid>
            </header>
        </div>
    );
}

export default App;
