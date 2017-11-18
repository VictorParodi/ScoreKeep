import React, { Component } from 'react';
import { Players } from './../api/players';

class AddPlayer extends Component {
    handleSubmit = (event) => {
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

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" name="playerName" placeholder="Type your name" />
                <button> Add Player </button>
            </form>
        );
    }
}

export default AddPlayer;