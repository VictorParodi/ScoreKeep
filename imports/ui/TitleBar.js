import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {
    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1> { this.props.title } </h1>
                </div>
            </div>
        );
    }
}

TitleBar.defaultProps = {
    // title: 'Default Title'
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired
}

export default TitleBar;