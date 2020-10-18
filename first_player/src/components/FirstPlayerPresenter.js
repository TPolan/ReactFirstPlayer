import React, {useContext} from 'react';
import {Button, Container} from "@material-ui/core";
import {PlayerContext} from "../context/AddPlayerContext";

const FirstPlayerPresenter = (props) => {

    const {playersArr} = useContext(PlayerContext);
    const chooseRandomindex = max => Math.floor(Math.random() * Math.floor(playersArr.length));


    const handleChoosePlayer = () => {
        return (playersArr.find((_,index)=> index ===  chooseRandomindex));
    }

    return (
            <Container>
                <Button onClick={handleChoosePlayer}>Choose the first Player</Button>
            </Container>
    )
}

export default FirstPlayerPresenter;