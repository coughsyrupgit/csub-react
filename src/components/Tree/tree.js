import Folder from '../Folder'

const bookmarks = window.chrome.bookmarks;

export default class Tree {
    constructor(props) {
        this.data = [];
        this.folders = [];
        this.onUpdate = props.updateCallback || null;
    }

    update() {
        var self = this;

        return new Promise(function (resolve) {
            bookmarks.getTree(function (tree) {
                self.data = tree;
                self.folders = [];
                self._extractFolders(tree);

                if (typeof self.onUpdate == 'function') {
                    self.onUpdate(self)
                }

                resolve(self);
            });
        })
    }

    _extractFolders(tree) {
        tree.forEach((subtree) => {
            if (subtree.children) {
                if (subtree.children.filter((item) => !item.children).length) {
                    this.folders.push(new Folder(subtree));
                }
                this._extractFolders(subtree.children)
            }
        })
    }
}
