import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'

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

        const cardStyle = (this.props.iterator % 2 === 0) ? 'uk-card-default' : 'uk-card-primary';
        let cardClass = "uk-card " /*+ cardStyle*/ + " uk-card-body";

        return (
            <div className={cardClass}>
                <h2 className="uk-card-title">{this.props.title}</h2>
                <ul className="uk-list uk-list-striped">
                    {linksItems}
                </ul>
            </div>
        )
    }
}