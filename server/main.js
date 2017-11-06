import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(function() {
    if ( !(Players.find().count()) ) {
        Players.insert({
            name: 'Katy',
            score: 14
        });
    }
});