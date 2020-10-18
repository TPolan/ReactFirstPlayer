import React, {useState} from 'react';
import './App.css';
import 'fontsource-roboto';
import { Card, Typography, Grid ,Container, Button ,FormControl,InputLabel,Input,FormHelperText } from '@material-ui/core';
import PlayerCard from './components/PlayerCard';

function App() {

const [playersArr, setPlayersArr] = useState([]);
const [playerInput,setPlayerInput] = useState('');
const handleChange = (event) => {setPlayerInput(event.target.value)};
const handleAddPlayer = () => setPlayersArr(prevPlayers  => [...prevPlayers, playerInput]);
const handleRemovePlayer = (id) => {

}
const mappedPlayersArr = playersArr.map(player=><PlayerCard name={player} handle={handleRemovePlayer}/>
)

console.log(playersArr)

  return (
    <div className="App">
      <header className="App-header">
        <Grid >
          <Typography variant={'h2'} color={'primary'}>
            Choose a first random player
          </Typography>
          <Container direction={"column"}>
            <FormControl color={"secondary"}>
              <InputLabel htmlFor="my-input">Player Name</InputLabel>
              <Input onChange={handleChange} value={playerInput} id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">Please add all the player names</FormHelperText>
            </FormControl>
            <Button
                onClick={handleAddPlayer}
                variant="contained"
                color="primary">
              Add Player
            </Button>
            <Container>
              {players}
            </Container>
          </Container>
        </Grid>
      </header>
    </div>
  );
}

export default App;
