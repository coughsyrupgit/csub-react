const storage = window.chrome.storage;

const defaults = {}

export default class Storage {
    constructor(defaultData, chapter) {
        this.data = {};
        this.chapter = chapter;

        if (chapter) {
            this.data[chapter] = defaultData || defaults
        } else {
            this.data = defaultData || defaults
        }

        this.get(this.data).then(data => this.data = data)
    }

    get(defaultData) {
        if (!defaultData) defaultData = this.data;

        return new Promise(resolve => {
            storage.sync.get(defaultData, data => resolve(this.chapter ? data[this.chapter] : data))
        })
    }

    set(data) {
        return new Promise((resolve, reject) => {
            if (!data) reject(new Error ('No data is provided to set'))
            if (this.chapter) {
                data = this.data[this.chapter] = {...data};
            }
            storage.sync.set(data, result => resolve(result))
        })
    }
}
