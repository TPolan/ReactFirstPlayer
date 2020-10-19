import React, {useState} from "react";
import axios from 'axios';

const PlayerContext = React.createContext();

const AddPlayerContextProvider = props => {

    const [playersArr, setPlayersArr] = useState(['Urban', 'Pepa', 'Nifty', 'Jirka']);
    const [playerInput, setPlayerInput] = useState('');
    const handleChange = (event) => {
        setPlayerInput(event.target.value)
    };
    const handleAddPlayer = () => {
        const updatedArr = [...playersArr, playerInput];
        setPlayersArr(updatedArr);
        axios.post('https://reactfirstplayer.firebaseio.com/players', updatedArr)
            .then(response => {console.log(response)})
            .catch(error => {console.log(error)});
    };
    const handleRemovePlayer = key => {
        setPlayersArr((prevState => {
            const prevArr = [...prevState];
            const updatedArr = prevArr.filter((_, index) => index !== key);
            return [...updatedArr]
        }))
    }

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

export {AddPlayerContextProvider, PlayerContext};