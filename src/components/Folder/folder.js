import Bookmark from '../Bookmark'

export default class Folder {
    constructor(treeNode) {
        const links = treeNode.children.filter(item => !item.children);
        const {id, title} = treeNode;

        this.id = id;
        this.title = title;
        this.links = links.map((elem) => new Bookmark(elem))
    }
}
