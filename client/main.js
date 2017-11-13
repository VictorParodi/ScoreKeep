import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return (
      <p key={player._id}>
        {`${player.name} has ${player.score} point(s)`}
        <button onClick={updatePlayers.bind(null, player._id, 1)}> + 1 </button>
        <button onClick={updatePlayers.bind(null, player._id, -1)} > - 1 </button>
        <button onClick={removePlayer.bind(null, player._id)}> X </button>
      </p>
    );
  });
}

const handleSubmit = (event) => {
  event.preventDefault();
  let playerName = event.target.playerName.value;

  if (playerName) {
    Players.insert({
      name: playerName,
      score: 0
    });

    event.target.playerName.value = '';
  }
}

const updatePlayers = (playerId, operator) => {
  Players.update(
    playerId,
    {
      $inc: { score: operator }
    }
  );
}

const removePlayer = (playerId) => {
  Players.remove(playerId);
}

Meteor.startup(function() {
  let title = 'Score Keep';
  let name = 'Johnny';

  Tracker.autorun(function() {
    let players = Players.find().fetch();
    
    let jsx = (
      <div>
        <h1> { title } </h1>
        <p> Hello { name } </p>
        <p> Another awesome text. </p>
        <div>
          { 
            renderPlayers(players)
          }
        </div>

          <form onSubmit={handleSubmit}>
            <input type="text" name="playerName" placeholder="Type your name" />
            <button> Add Player </button>
          </form>
      </div>
    );
  
    render(jsx, document.getElementById('app'));
  });
});