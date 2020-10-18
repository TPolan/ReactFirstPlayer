import React, {useState} from "react";
import {Grid} from "@material-ui/core";
import PlayerCard from "../components/PlayerCard";

const PlayerContext = React.createContext();

const addPlayerContextProvider = (props) => {

    const [playersArr, setPlayersArr] = useState(['Urban', 'Pepa', 'Nifty', 'Jirka']);
    const [playerInput, setPlayerInput] = useState('');
    const handleChange = (event) => {
        setPlayerInput(event.target.value)
    };
    const handleAddPlayer = () => setPlayersArr(prevPlayers => [...prevPlayers, playerInput]);
    const handleRemovePlayer = (key) => {
        setPlayersArr((prevState => {
            const prevArr = [...prevState];
            const updatedArr = prevArr.filter((_, index) => index !== key);
            return [...updatedArr]
        }))
    }
    const mappedPlayersArr = playersArr.map(
        (player, index) => {
            return (
                <Grid item>
                    <PlayerCard
                        name={player}
                        remove={handleRemovePlayer}
                        key={index}
                        index={index}
                    />
                </Grid>
            )
        }
    )

    return (
        <PlayerContext.Provider value={{
            handleAddPlayer,
            handleRemovePlayer,
            handleChange,
            playersArr,
            setPlayersArr,
            playerInput,
            setPlayerInput
        }}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export {addPlayerContextProvider as AddPlayerContextProvider, PlayerContext};