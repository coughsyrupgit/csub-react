import React from 'react'
import Link from '../Link'

const Card = ({links, title, tree, config}) => {
    let linksItems = links.map((link, index) => {
        let classNames = "link__container fade";
        
        return (
            <li key={index} className={classNames}>
                <Link url={link.url} title={link.title} bookmark={link} tree={tree} config={config}/>
            </li>
        )
    })

    let background = config.dark_mode ? 'secondary' : 'default',
        classNames = `uk-card uk-card-${background} uk-card-body`

    return (
        <div className={classNames}>
            <h2 className="uk-card-title">{title}</h2>
            <ul className="uk-list">
                {linksItems}
            </ul>
            <button
                type="button"
                className="uk-icon-link uk-position-top-right uk-padding-small"
                uk-icon="move"
                data-role="drag-handle">
            </button>
        </div>
    )
}

export default Card
