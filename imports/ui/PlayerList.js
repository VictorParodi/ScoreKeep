import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Player from './Player';

class PlayerList extends Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return (
                <div className="item">
                    <p> Add your first player </p>
                </div>
            );
        } else {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player} />
            });
        }
    }

    render() {
        return(
            <div> {this.renderPlayers()} </div>
        );
    }
}

export default PlayerList;