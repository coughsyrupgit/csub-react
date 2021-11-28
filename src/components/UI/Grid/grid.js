import React from "react";
import { useTree } from "../../Tree";
import Card from '../Card';

export default function Grid() {
    const [
        {folders}
    ] = useTree();
    return (
        <ul>
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
