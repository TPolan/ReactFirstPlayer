import React, {useContext} from "react";
import {Grid} from "@material-ui/core";
import PlayerCard from "./PlayerCard";
import {PlayerContext} from '../context/AddPlayerContext';

const PlayerPool = props => {

    const {playersArr, handleRemovePlayer} = useContext(PlayerContext)

    const mappedPlayersArr = playersArr.map(
        (player, index) => {
            return (
                <Grid item key={index}>
                    <PlayerCard
                        name={player}
                        remove={handleRemovePlayer}
                        index={index}
                    />
                </Grid>
            )
        }
    )
    return (
        <Grid container justify={"center"} spacing={1}>
            {mappedPlayersArr}
        </Grid>
    )
}
export default PlayerPool;

