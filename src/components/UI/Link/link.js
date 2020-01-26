import React from 'react'
import PropTypes from 'prop-types'
import './link.css'

export default class Link extends React.Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        title: PropTypes.string,
        entity: PropTypes.object
    }

    getFavicon(url) {
        return ['chrome://favicon/', url].join('')
    }

    render () {
        let faviconUrl = this.getFavicon(this.props.url);
        const bookmark = this.props.bookmark;

        return (
            <div>
                <a href={ this.props.url } className="link">
                    <img src={faviconUrl} alt="" className="link__image"/>
                    <span className="link__title">{ this.props.title || this.props.url }</span>
                </a>
                <div className="uk-position-right uk-background-primary uk-flex uk-flex-right uk-flex-middle link__actions">
                    <button type="button" className="uk-icon uk-padding-small link__remove" uk-icon="close" onClick={bookmark.remove.bind(bookmark)}></button>
                </div>
            </div>
        )
    }
}
