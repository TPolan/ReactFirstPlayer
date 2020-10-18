import React, {useContext} from 'react';
import {Button, Container} from "@material-ui/core";
import {PlayerContext} from "../context/AddPlayerContext";
import FirstPlayerDialog from "./FirstPlayerDialog";

const FirstPlayerPresenter = props => {

    const {playersArr} = useContext(PlayerContext);
    const chooseRandomindex = max => Math.floor(Math.random() * Math.floor(playersArr.length));
    let firstPlayer = null;

    const handleChoosePlayer = () => {
        firstPlayer = (playersArr.find((_, index) => index === chooseRandomindex));
    }

    return (
        <Container>
            <Button onClick={handleChoosePlayer}>Choose the first Player</Button>
            {firstPlayer ? <FirstPlayerDialog>{firstPlayer}</FirstPlayerDialog> : null}
        </Container>

    )
}

export default FirstPlayerPresenter;