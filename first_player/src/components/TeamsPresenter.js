import React, {useContext, useState} from 'react';
import {Button, Grid} from "@material-ui/core";
import TeamsDialog from "./TeamsDialog";
import useDialog from "../hooks/useDialog";
import {PlayerContext} from "../context/AddPlayerContext";
import SelectInput from "./SelectInput";

const TeamsPresenter = props => {

    const {playersArr} = useContext(PlayerContext);
    const {isOpen, handleDialog, isLoading} = useDialog();
    const [teams, setTeams] = useState([]);
    const teamCount = Math.ceil(playersArr.length / 2);
    const shufflePlayers = (playersArr) => {
        let players = [...playersArr];
        console.log(players,'beforeShuffle')
        for (let i = players.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = players[i];
            players[i] = players[j];
            players[j] = temp;
        }
        console.log(players,'afterShuffle')
        return players;
    }

    const splitTeams = (namesArr, teamCount) => {
        let teams = [];
        while (teamCount > 0) {
            teams.push(namesArr.splice(0, Math.floor(namesArr.length / teamCount)))
            teamCount--;
        }
        console.log(teams, 'splitTeams')
        return teams
    }

    const handleCreateTeams = (playersArr) => {
        setTeams(splitTeams(shufflePlayers(playersArr),teamCount));
        handleDialog();
    }
    console.log(teams, 'teams');

    return (
        <Grid container>
            <SelectInput teamCount={teamCount}/>
            <Button disabled={!(teamCount >= 2)} onClick={handleCreateTeams}>Create Teams</Button>
            <TeamsDialog
                teams={teams}
                open={isOpen}
                loading={isLoading}
                handler={handleDialog}
            />
        </Grid>
    )
}

export default TeamsPresenter;

