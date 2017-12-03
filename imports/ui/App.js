import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends Component {
    render() {
        return(
            <div>
                <TitleBar title="Score Keep App!" />
                <div className="wrapper">
                    <PlayerList players={this.props.players} />
                    <AddPlayer />
                </div>
            </div>
        );
    }
}

export default App;