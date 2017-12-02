import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';
import { Tracker } from 'meteor/tracker';

import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';

Meteor.startup(function() {
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    
    let jsx = (
      <div>
        <TitleBar title="ScoreKeep App!" />
        <PlayerList players={players} />
        <AddPlayer />
      </div>
    );
  
    render(jsx, document.getElementById('app'));
  });
});