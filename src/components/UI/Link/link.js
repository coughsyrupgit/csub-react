import React from "react";

const getFavicon = url => ['chrome://favicon/', url].join('')

export default function Link(props) {
    const {
        title,
        url
    } = props;

    return (
        <>
            <a href={ url }
               className="flex items-start gap-3 py-2 block"
            >
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
