import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players, calculatePlayerPositions } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

import App from './../imports/ui/App';

Meteor.startup(function() {
  Tracker.autorun(function() {
    let players = Players.find({}, {sort: {score: -1}}).fetch();
    let positionedPlayers = calculatePlayerPositions(players);

    render(
      <App players={positionedPlayers} />,
      document.getElementById('app')
    );
  });
});