import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Players } from './../api/players';

class Player extends Component {
    updatePlayers = (playerId, operator) => {
        Players.update(
            playerId,
            {
                $inc: { score: operator }
            }
        );
    }
      
    removePlayer(playerId) {
        Players.remove(playerId);
    }

    render() {
        const { _id, name, score } = this.props.player;

        return(
            <p key={_id}>
                {`${name} has ${score} point(s)`}
                <button onClick={this.updatePlayers.bind(null, _id, 1)}> + 1 </button>
                <button onClick={this.updatePlayers.bind(null, _id, -1)} > - 1 </button>
                <button onClick={this.removePlayer.bind(null, _id)}> X </button>
            </p>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}

export default Player;