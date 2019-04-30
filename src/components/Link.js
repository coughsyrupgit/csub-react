import React from 'react'
import PropTypes from 'prop-types';

export default class Link extends React.Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        title: PropTypes.string
    }

    render () {
        return (
            <a href={ this.props.url }>{ this.props.title || this.props.url }</a>
        )
    }
}