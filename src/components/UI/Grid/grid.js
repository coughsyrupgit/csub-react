import React from 'react'
import Card from '../Card'

const Grid = ({items, tree, config}) => {
    const elems = items.map((item, index) => {
        let classNames = "uk-width-1-1 uk-width-1-2@s uk-width-1-3@m";
        classNames += item.isHidden ? ' fade--hidden' : '';

        return (
            <li className={classNames} key={index}>
                <Card title={item.title} links={item.links} iterator={index} tree={tree} config={config} />
            </li>
        )
    })

    return (
        <ul className="" data-uk-grid="masonry: true">{elems}</ul>
    )
}

export default Grid
