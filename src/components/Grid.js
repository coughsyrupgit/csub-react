import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

export default class Grid extends React.Component {
    static propTypes = {
        items: PropTypes.array
    }

    render () {
        let items = this.props.items.map((item, index) => {
            return (
                <li className="uk-width-1-3" key={index}>
                    <Card title={item.title} links={item.links} iterator={index}/>
                </li>
            )
        })

        return (
            <ul className="uk-grid">{items}</ul>
        )
    }
}