import React from "react";
import Link from '../Link';

export default function Card(props) {
    const {
        title,
        links
    } = props;

    return (
        <div className="rounded bg-white bg-opacity-40 p-4">
            <h2 className="text-lg">
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
