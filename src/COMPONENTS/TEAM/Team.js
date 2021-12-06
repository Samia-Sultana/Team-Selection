import React from 'react';
import './Team.css'
const Team = (props) => {
    const teamCost = props.team.reduce((total, playerCost) => total + Number(playerCost.auction_price), 0);
    
    return (
        <div className="team">
            <h1>Team Summary</h1>
            <p>Members: {props.team.length}</p>
            <h3>Member List</h3> 
            {props.team.map(player => <p>{player.name}</p>)}
            <h4>Total cost: {teamCost}</h4>
        </div>
    );
};

export default Team;