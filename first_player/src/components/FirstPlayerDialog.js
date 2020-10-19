import React from 'react';
import {CircularProgress, Dialog, DialogContent, DialogTitle, Grid} from "@material-ui/core";

const FirstPlayerDialog = props => {
    const {player, handler, open, loading} = props

    return (
        <Dialog onClose={handler} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handler}>
                The first player is:
            </DialogTitle>
            <DialogContent>
                <Grid container justify={"center"}>
                    {loading ? <CircularProgress color="secondary"/> : <h3>{player}</h3>}
                </Grid>
            </DialogContent>
        </Dialog>
    )
}
export default FirstPlayerDialog;