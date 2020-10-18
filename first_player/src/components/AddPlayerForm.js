import React, {useContext} from 'react';
import {Button, FormControl, FormHelperText, Grid, Input, InputLabel} from "@material-ui/core";
import {PlayerContext} from "../context/AddPlayerContext";

const addPlayerForm = (props) => {

const {handleChange, playerInput, handleAddPlayer} = useContext(PlayerContext);

    return (
        <>
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
        </>
    )
}

export default addPlayerForm;