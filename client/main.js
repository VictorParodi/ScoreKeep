import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { tracker } from 'meteor/tracker';

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return <p key={player._id}> {`${player.name} has ${player.score} point(s)`} </p>;
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

Meteor.startup(function() {
  Tracker.autorun(function() {
    let players = Players.find().fetch();

    let title = 'Score Keep';
    let name = 'Johnny';

    let jsx = (
      <div>
        <h1> { title } </h1>
        <p> Hello { name } </p>
        <p> Another awesome text. </p>
        <div>
          { renderPlayers(players) }
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Type the playername" />
          <button> Add Player </button>
        </form>
      </div>
    );
  
    render(jsx, document.getElementById('app'));
  });
});