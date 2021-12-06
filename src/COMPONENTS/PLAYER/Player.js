import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
    const {name, age, auction_price, proficiency, image} = props.player;
    return (
        <div className = "player">
             <img className="photo" src={image} alt="" />
            <div className="info">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Auction: {auction_price}</p>
            <h4>Role: {proficiency}</h4>
            </div>
            <div className="addPlayerButton">
            <button onClick = {() => props.handleAddButton(props.player)}><FontAwesomeIcon icon={faPlus} />Add</button>
            </div>
        </div>
    );
};

export default Player;