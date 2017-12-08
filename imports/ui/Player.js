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
                <div className="player">
                    <div>
                        <h3 className="player__name"> {name} </h3>
                        <p className="player__stats"> {`has ${score} point(s)`} </p>
                    </div>

                    <div className="player__actions">
                        <button className="button button--round" onClick={this.updatePlayers.bind(null, _id, 1)}> +1 </button>
                        <button className="button button--round" onClick={this.updatePlayers.bind(null, _id, -1)} > -1 </button>
                        <button className="button button--round" onClick={this.removePlayer.bind(null, _id)}> X </button>   
                    </div>
                </div>
            </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object.isRequired
}

export default Player;