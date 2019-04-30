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
            return (
                <tr key={index}>
                    <td>
                        <Link url={link.url} title={link.title}/>
                    </td>
                </tr>
            )
        })

        const cardStyle = (this.props.iterator % 2 === 0) ? 'uk-card-default' : 'uk-card-primary';
        const cardClass = "uk-card " + cardStyle + " uk-card-body";

        return (
            <div className={cardClass}>
                <h2 className="uk-card-title">{this.props.title}</h2>
                <table className="uk-table uk-table-striped">
                    <tbody>{linksItems}</tbody>
                </table>
            </div>
        )
    }
}