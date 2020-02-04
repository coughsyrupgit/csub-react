import React from 'react'
import './grid.css'
import Card from '../Card'

const Grid = ({items, tree}) => {
    const elems = items.map((item, index) => {
        let classNames = "uk-width-1-3 uk-margin-medium-bottom";
        classNames += item.isHidden ? ' fade--hidden' : '';

        return (
            <li className={classNames} key={index}>
                <Card title={item.title} links={item.links} iterator={index} tree={tree} />
            </li>
        )
    })

    return (
        <ul className="masonry-grid">{elems}</ul>
    )
}

export default Grid
