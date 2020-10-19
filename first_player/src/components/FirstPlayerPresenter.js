import React, {useContext, useState} from 'react';
import {Button, Container} from "@material-ui/core";
import {PlayerContext} from "../context/AddPlayerContext";
import FirstPlayerDialog from "./FirstPlayerDialog";

const FirstPlayerPresenter = props => {
    const {playersArr} = useContext(PlayerContext);
    const [firstPlayer, setFirstPlayer] = useState('')
    const [dialogOpen, setDialogOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const chooseRandomIndex = () => Math.floor(Math.random() * playersArr.length);
    const showSpinner = () => {
        if (dialogOpen) {
            setLoading(!loading);
        }
        setTimeout(() => {
            setLoading(!loading);
        }, 1500);
    }
    const handleDialog = () => {
        showSpinner();
        setDialogOpen(!dialogOpen);
    }

    const handleChoosePlayer = () => {
        setFirstPlayer(playersArr[chooseRandomIndex()]);
        handleDialog();
    }

    return (
        <Container>
            <Button onClick={handleChoosePlayer}>Choose the first Player</Button>
            <FirstPlayerDialog
                player={firstPlayer}
                open={dialogOpen}
                loading={loading}
                show={showSpinner}
                handler={handleDialog}
            />
        </Container>

    )
}

export default FirstPlayerPresenter;