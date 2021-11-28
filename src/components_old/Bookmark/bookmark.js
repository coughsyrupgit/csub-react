const bookmarks = window.chrome.bookmarks;

export default class Bookmark {
    constructor(props) {
        Object.assign(this, {
            ...props
        })
    }

    remove() {
        const confirmed = window.confirm("Are you sure you want to remove the bookmark?");

        if (confirmed) {
            bookmarks.remove(this.id)
        }
    }
}
