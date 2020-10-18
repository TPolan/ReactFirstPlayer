import React, {useContext} from "react";
import {Grid} from "@material-ui/core";
import PlayerCard from "./PlayerCard";
import AddPlayerContext from '../context/AddPlayerContext';

const playerPool = (props) => {

    const {playersArr,handleRemovePlayer} = useContext(AddPlayerContext)

    const mappedPlayersArr = playersArr.map(
        (player, index) => {
            return (
                <Grid item>
                    <PlayerCard
                        name={player}
                        remove={handleRemovePlayer}
                        key={index}
                        index={index}
                    />
                </Grid>
            )
        }
    )
    return  (
        <Grid container justify={"center"} spacing={1}>
            {mappedPlayersArr}
        </Grid>
        )
}
export default playerPool;

