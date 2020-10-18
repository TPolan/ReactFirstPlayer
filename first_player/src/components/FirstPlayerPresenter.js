import React, {useContext, useState} from 'react';
import {Button, Container} from "@material-ui/core";
import {PlayerContext} from "../context/AddPlayerContext";
import FirstPlayerDialog from "./FirstPlayerDialog";

const FirstPlayerPresenter = props => {

    const [dialogOpen,setDialogOpen] = useState(false);
    const handleDialogClick = () => setDialogOpen(!dialogOpen)
    const {playersArr} = useContext(PlayerContext);
    const chooseRandomindex = max => Math.floor(Math.random() * Math.floor(playersArr.length));
    let firstPlayer = null;

    const handleChoosePlayer = () => {
        firstPlayer = (playersArr.find((_, index) => index === chooseRandomindex),
        handleDialogClick()
        );
    }

    return (
        <Container>
            <Button onClick={handleChoosePlayer}>Choose the first Player</Button>
            {firstPlayer ? <FirstPlayerDialog player={firstPlayer} open={dialogOpen} handler={handleDialogClick}/> : null}
        </Container>

    )
}

export default FirstPlayerPresenter;