import React from 'react'
import './link.css'

const getFavicon = url => ['chrome://favicon/', url].join('')

const removeBookmark = (bookmark, tree) => {
    bookmark.remove();
    tree.update();
}

const Link = ({url, title, bookmark, tree}) => (
    <div>
        <a href={ url } className="link">
            <img src={getFavicon(url)} alt="" className="link__image"/>
            <span className="link__title">{ title || url }</span>
        </a>
        <div className="uk-position-right uk-flex uk-flex-right uk-flex-middle link__actions">
            <button type="button" className="uk-icon uk-padding-small link__remove" uk-icon="close" onClick={removeBookmark.bind(this, bookmark, tree)}></button>
        </div>
    </div>
)

export default Link
