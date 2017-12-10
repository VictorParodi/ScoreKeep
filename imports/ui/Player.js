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
        const { _id, name, score, rank, position } = this.props.player;
        let itemClassname = `item--position-${rank}`;

        return(
            <div key={_id} className={`item ${itemClassname}`}>
                <div className="player">
                    <div>
                        <h3 className="player__name"> {name} </h3>
                        <p className="player__stats">
                            {position} place - {`${score} point(s)`}
                        </p>
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