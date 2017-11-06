import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [
  {
    _id: '1',
    name: 'Allison',
    score: 10
  },

  {
    _id: '2',
    name: 'Kate',
    score: 8
  },

  {
    _id: '3',
    name: 'Susan',
    score: 9
  }
];

const renderPlayers = function(playersList) {
  return playersList.map(function(player) {
    return <p key={player._id}> {`${player.name} has ${player.score} point(s)`} </p>;
  });
}

Meteor.startup(function() {
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
    </div>
  );

  render(jsx, document.getElementById('app'));
});