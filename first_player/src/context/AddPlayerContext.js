import React, {useState} from "react";

const PlayerContext = React.createContext();

const AddPlayerContextProvider = (props) => {

    const [playersArr, setPlayersArr] = useState(['Urban', 'Pepa', 'Nifty', 'Jirka']);
    const [playerInput, setPlayerInput] = useState('');
    const handleChange = (event) => {
        setPlayerInput(event.target.value)
    };
    const handleAddPlayer = () => setPlayersArr(prevPlayers => [...prevPlayers, playerInput]);
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