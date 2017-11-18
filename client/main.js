import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return (
      <Player key={player._id} player={player} />
    );
  });
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