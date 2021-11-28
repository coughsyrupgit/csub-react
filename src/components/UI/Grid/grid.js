import React from "react";
import { useTree } from "../../Tree";
import Card from '../Card';

export default function Grid() {
    const [
        {folders}
    ] = useTree();
    return (
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {folders && folders.map(
                (item, index) => {
                    return (
                        <li key={ index }>
                            <Card {...item} />
                        </li>
                    )
                }
            )}
        </ul>
    )
}
