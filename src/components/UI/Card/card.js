import React from "react";
import Link from '../Link';

export default function Card(props) {
    const {
        title,
        links
    } = props;

    return (
        <div>
            <h2>
                { title }
            </h2>
            <ul>
                { links.map(
                    (item, index) => {
                        return (
                            <li key={ index }>
                                <Link {...item} />
                            </li>
                        )
                    }
                ) }
            </ul>
        </div>
    )
}
