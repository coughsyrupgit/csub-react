import React from 'react'
import PropTypes from 'prop-types'
import './link.css'

export default class Link extends React.Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        title: PropTypes.string
    }

    getFavicon(url) {
        return ['chrome://favicon/', url].join('')
    }

    render () {
        let faviconUrl = this.getFavicon(this.props.url);

        return (
            <a href={ this.props.url } className="link">
                <img src={faviconUrl} alt="" className="link__image"/>
                <span className="link__title">{ this.props.title || this.props.url }</span>
            </a>
        )
    }
}
