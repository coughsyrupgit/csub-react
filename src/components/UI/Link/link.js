import React from "react";

const getFavicon = url => ['chrome://favicon/', url].join('')

export default function Link(props) {
    const {
        title,
        url
    } = props;

    return (
        <>
            <a href={ url }>
                <img src={ getFavicon(url) }
                     alt={ title }
                />
                <span>
                    { title || url }
                </span>
            </a>
        </>
    )
}
