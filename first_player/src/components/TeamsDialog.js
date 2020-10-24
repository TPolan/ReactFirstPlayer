import React from 'react';
import {CircularProgress, Dialog, DialogContent, DialogTitle, Grid} from "@material-ui/core";

const TeamsDialog = props => {

    const {handler, loading, open, teams} = props;

    return (
        <Dialog onClose={handler} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handler}>
                The teams are:
            </DialogTitle>
            <DialogContent>
                <Grid container justify={"center"}>
                    {
                        loading ? <CircularProgress color="secondary"/> :
                        {teams}
                    }
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default TeamsDialog;