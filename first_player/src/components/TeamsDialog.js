import React from 'react';
import {CircularProgress, Dialog, DialogContent, DialogTitle, Grid} from "@material-ui/core";

const TeamsDialog = props => {

    const {handler, loading, open, teams} = props;
    console.log(teams, 'props')
    const teamsMap = teams.map((team, index)=>
            <Grid item key={index}>
                <h3>Team #{index+1}</h3>
                {/*{team.map((player, index)=> <h2 key={index}>{player}</h2>*/}
                {/*)}*/}
            </Grid>
    )

    console.log(teamsMap)

    return (
        <Dialog onClose={handler} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handler}>
                The teams are:
            </DialogTitle>
            <DialogContent>
                <Grid container justify={"center"}>
                    {
                        loading ? <CircularProgress color="secondary"/> :
                        {teamsMap}
                    }
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default TeamsDialog;