import React, { Component } from 'react';

class AddPlayer extends Component {
    render() {
        return (
            <form>
                <input type="text" name="playerName" placeholder="Type your name" />
                <button> Add Player </button>
            </form>
        );
    }
}

export default AddPlayer;