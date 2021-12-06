import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import PlayerData from './FakeData/fakeData.json';
import Player from './COMPONENTS/PLAYER/Player';
import Team from './COMPONENTS/TEAM/Team';

function App() {
  const [team, setTeam] = useState([]);
  const handleAddButton = (player) =>{
    const newTeam = [...team,player];
    setTeam(newTeam);
    console.log(team);
  }
  return (
    <div className="App">
      <div className="playerProfile">
        {
          PlayerData.map(player => <Player player = {player} handleAddButton = {handleAddButton}></Player>)
        }
      </div>
      <div className="teamSummary">
        <Team team = {team}></Team>
      </div>
    </div>
  );
}

export default App;
