import React from 'react'

const Tiles = (({items, config}) => {
    const background = config.dark_mode ? 'secondary' : 'default';
    const elems = items.map((item, index) => (
        <li key={index}>
            <a href={item.appLaunchUrl} className={`uk-tile uk-tile-${background} uk-padding-small uk-display-block`} title={item.shortName}>
                <img src={item.icons.length ? item.icons[item.icons.length - 1].url : ''} width="40" height="40" />
            </a>
        </li>
    ))
    return elems && elems.length ? (
        <ul className="uk-flex uk-flex-center uk-text-center uk-padding-remove reset-list uk-margin-medium-bottom">{elems}</ul>
    ) : null
})

export default Tiles
