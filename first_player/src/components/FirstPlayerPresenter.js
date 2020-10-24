import React, {useContext, useState} from 'react';
import {Button, Container} from "@material-ui/core";
import {PlayerContext} from "../context/AddPlayerContext";
import FirstPlayerDialog from "./FirstPlayerDialog";
import useDialog from "../hooks/useDialog";

const FirstPlayerPresenter = props => {
    const {playersArr} = useContext(PlayerContext);
    const [firstPlayer, setFirstPlayer] = useState('')
    const chooseRandomIndex = () => Math.floor(Math.random() * playersArr.length);
    const {handleDialog, isLoading, isOpen} = useDialog();

    const handleChoosePlayer = () => {
        setFirstPlayer(playersArr[chooseRandomIndex()]);
        handleDialog();
    }

    return (
        <Container>
            <Button onClick={handleChoosePlayer}>Choose the first Player</Button>
            <FirstPlayerDialog
                player={firstPlayer}
                open={isOpen}
                loading={isLoading}
                handler={handleDialog}
            />
        </Container>

    )
}

export default FirstPlayerPresenter;