import {
    useEffect,
    useReducer,
    useState
} from 'react';

const bookmarks = window.chrome.bookmarks;

const hasNodeLeaves = tree => tree.children.filter((item) => !item.children).length;

const extractFoldersFromNode = (folders, node) => {
    if (node.children) {
        if (hasNodeLeaves(node)) {
            folders.push({
                id: node.id,
                title: node.title,
                links: node.children.filter(item => !item.children)
            });
        }
        return node.children.reduce(extractFoldersFromNode, folders)
    }
    return folders;
}

export default function useTree() {
    const [tree, setTree] = useState();
    const [folders, setFolders] = useReducer(() => {
        return tree &&
            tree.length &&
            tree.reduce(extractFoldersFromNode, [])
    }, null);

    useEffect(() => {
        bookmarks.getTree(setTree)
    }, [])

    useEffect(setFolders, [tree])

    return [
        {
            tree,
            folders
        }
    ]
}
