import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'

export default class Card extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        links: PropTypes.array,
        iterator: PropTypes.number
    }

    render () {
        let linksItems = this.props.links.map((link, index) => {
            let classNames = "fade";
            classNames += link.isHidden ? ' fade--hidden' : '';
            return (
                <li key={index} className={classNames}>
                    <Link url={link.url} title={link.title}/>
                </li>
            )
        })

        return (
            <div className="uk-card uk-card-secondary uk-card-body">
                <h2 className="uk-card-title">{this.props.title}</h2>
                <ul className="uk-list uk-list-striped">
                    {linksItems}
                </ul>
        </div>
        )
    }
}
