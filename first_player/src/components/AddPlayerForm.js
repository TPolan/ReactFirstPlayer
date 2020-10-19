import React, {useContext} from 'react';
import {Button, FormControl, FormHelperText, Grid, Input, InputLabel} from "@material-ui/core";
import {PlayerContext} from "../context/AddPlayerContext";

const AddPlayerForm = props => {

    const {handleChange, playerInput, handleAddPlayer} = useContext(PlayerContext);

    return (
        <Grid container direction={"row-reverse"} justify={"center"} alignItems={"center"}>
            <FormControl color={"secondary"}>
                <InputLabel htmlFor="my-input">Player Name</InputLabel>
                <Input onChange={handleChange} value={playerInput} id="my-input"
                       aria-describedby="my-helper-text"/>
                <FormHelperText id="my-helper-text">Add new players to the player pool</FormHelperText>
            </FormControl>
            <Button
                onClick={handleAddPlayer}
                variant="contained"
                color="primary">
                Add
            </Button>
        </Grid>
    )
}

export default AddPlayerForm;