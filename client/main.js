import React, { Component } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  let title = 'Score Keep';
  let name = 'Johnny';
  let jsx = (
    <div>
      <h1> { title } </h1>
      <p> Hello { name } </p>
      <p> Another awesome text. </p>
    </div>
  );

  render(jsx, document.getElementById('app'));
});