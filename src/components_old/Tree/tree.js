import Folder from '../Folder'

const bookmarks = window.chrome.bookmarks;

const hasNodeLeaves = tree => tree.children.filter((item) => !item.children).length;

const extractFoldersFromNode = (folders, node) => {
    if (node.children) {
        if (hasNodeLeaves(node)) {
            folders.push(new Folder(node));
        }
        return node.children.reduce(extractFoldersFromNode, folders)
    }
    return folders;
}

export default class Tree {
    constructor(props) {
        this.data = [];
        this.folders = [];
        this.onUpdate = props.updateCallback || null;
    }

    update() {
        return new Promise((resolve) => {
            bookmarks.getTree((tree) => {
                this._setData(tree);
                resolve(this);
            });
        })
    }

    _setData(data) {
        this.data = data;
        this.folders = this._extractFolders(data);

        if (typeof this.onUpdate == 'function') {
            this.onUpdate(this)
        }
    }

    _extractFolders(tree) {
        return tree.reduce(extractFoldersFromNode, []);
    }
}
