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
            <div key={_id} className="item">
                <p> {`${name} has ${score} point(s)`} </p>
                <button className="button button--round" onClick={this.updatePlayers.bind(null, _id, 1)}> +1 </button>
                <button className="button button--round" onClick={this.updatePlayers.bind(null, _id, -1)} > -1 </button>
                <button className="button button--round" onClick={this.removePlayer.bind(null, _id)}> X </button>
            </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}

export default Player;