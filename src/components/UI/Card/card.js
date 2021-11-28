import React, { useState } from "react";
import Link from '../Link';
import { BsFolder, BsChevronDown, BsChevronUp } from "react-icons/bs";
import './styles.css';

const maxLinks = 5;

export default function Card(props) {
    const {
        title,
        links
    } = props;

    const [isExpanded, setExpanded] = useState(false);

    return (
        <div className="rounded bg-gray-800 shadow-md overflow-hidden flex flex-col h-full">
            <h2 className="text-lg flex gap-3 items-center p-4">
                <BsFolder/>
                { title }
            </h2>
            <ul className={`px-4 flex-grow ${!isExpanded && 'collapsed'}`}>
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
            {
                (links.length > maxLinks) && 
                <button className="block flex justify-center py-2 px-4 w-full mt-2 hover:bg-gray-700 transition-colors"
                        onClick={() => setExpanded(() => !isExpanded)}
                >
                    { isExpanded ? <BsChevronUp/> : <BsChevronDown/> }
                </button>
            }
        </div>
    )
}
