import React from 'react'
import Link from '../Link'

const Card = ({links, title, tree}) => {
    let linksItems = links.map((link, index) => {
        let classNames = "link__container fade";
        
        return (
            <li key={index} className={classNames}>
                <Link url={link.url} title={link.title} bookmark={link} tree={tree}/>
            </li>
        )
    })

    return (
        <div className="uk-card uk-card-secondary uk-card-body">
            <h2 className="uk-card-title">{title}</h2>
            <ul className="uk-list uk-list-striped">
                {linksItems}
            </ul>
        </div>
    )
}

export default Card
