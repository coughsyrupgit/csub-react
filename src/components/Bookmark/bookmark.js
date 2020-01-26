const bookmarks = window.chrome.bookmarks;

export default class Bookmark {
    constructor(props) {
        Object.assign(this, {
            ...props,
            isHidden: false
        })
    }

    remove() {
        bookmarks.remove(this.id)
    }
}
