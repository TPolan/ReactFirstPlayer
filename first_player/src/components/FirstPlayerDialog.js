import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";

const FirstPlayerDialog = props => {
    const {player, handler, open} = props
    return (
        <Dialog onClose={props.handler} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handler}>
                Modal title
            </DialogTitle>
            <DialogContent dividers>
                <Typography variant={"h5"} gutterBottom>
                    {player}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handler} color="primary">
                    Save changes
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default FirstPlayerDialog;