import React, {useContext, useState} from 'react';
import {Button, Grid} from "@material-ui/core";
import TeamsDialog from "./TeamsDialog";
import useDialog from "../hooks/useDialog";
import FirstPlayerDialog from "./FirstPlayerDialog";
import {PlayerContext} from "../context/AddPlayerContext";
import SelectInput from "./SelectInput";

const TeamsPresenter = props => {

    const {playersArr} = useContext(PlayerContext);
    const {isOpen, handleDialog, isLoading} = useDialog();
    const [teams, setTeams] = useState([]);
    const chooseRandomIndex = () => Math.floor(Math.random() * playersArr.length);
    const handleCreateTeams = () => {

    }

    return (
        <Grid container>
            <SelectInput teamCount={Math.ceil(playersArr.length/2)}/>
            <Button onClick={handleCreateTeams}>Create Teams</Button>
            <TeamsDialog
                player={teams}
                open={isOpen}
                loading={isLoading}
                handler={handleDialog}
            />
        </Grid>
    )
}

export default TeamsPresenter;