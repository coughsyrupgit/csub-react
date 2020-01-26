import Folder from '../Folder'

const bookmarks = window.chrome.bookmarks;

export default class Tree {
    constructor(data) {
        this.data = data || [];
        this.folders = [];

        if (!data) {
            this.update();
        }
    }

    update() {
        var self = this;

        return new Promise(function (resolve) {
            bookmarks.getTree(function (tree) {
                self.data = tree;
                self.folders = [];
                self._extractFolders(tree);
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
