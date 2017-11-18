import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

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
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    
    let jsx = (
      <div>
        <TitleBar title="ScoreKeep App!" />

        <div>
          { 
            renderPlayers(players)
          }
        </div>

        <AddPlayer />
      </div>
    );
  
    render(jsx, document.getElementById('app'));
  });
});