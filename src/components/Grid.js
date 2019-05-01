import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

export default class Grid extends React.Component {
    static propTypes = {
        items: PropTypes.array
    }

    render () {
        let items = this.props.items.map((item, index) => {
            let classNames = "uk-width-1-3 uk-margin-medium-bottom fade";
            classNames += item.isHidden ? ' fade--hidden' : '';

            return (
                <li className={classNames} key={index}>
                    <Card title={item.title} links={item.links} iterator={index}/>
                </li>
            )
        })

        let classNames = "uk-grid"; 

        return (
            <ul className={classNames}>{items}</ul>
        )
    }
}