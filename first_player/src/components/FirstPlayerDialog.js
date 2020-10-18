import React, {useState} from 'react';
import {Dialog,DialogTitle,DialogContent,DialogActions,Button,Typography} from "@material-ui/core";

const FirstPlayerDialog = props => {
    const [dialogOpen,setDialogOpen] = useState(false);
    const handleDialogClick = () => setDialogOpen(!dialogOpen)

    return (
        <Dialog onClose={handleDialogClick} aria-labelledby="customized-dialog-title" open={dialogOpen}>
            <DialogTitle id="customized-dialog-title" onClose={handleDialogClick}>
                Modal title
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    {props.children}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleDialogClick} color="primary">
                    Save changes
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default FirstPlayerDialog;