const bookmarks = window.chrome.bookmarks;

export default class Bookmark {
    constructor(props) {
        Object.assign(this, {
            ...props,
            isHidden: false
        })
    }

    remove() {
        let confirmed = window.confirm("Are you sure you want to remove the bookmark?");

        if (confirmed) {
            bookmarks.remove(this.id)
        }
    }
}
