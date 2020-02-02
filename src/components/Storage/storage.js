const storage = window.chrome.storage;

const defaults = {}

export default class Storage {
    constructor(defaultData, chapter) {
        this.chapter = chapter;

        this.data = chapter ? {
            [chapter]: defaultData || defaults
        } : defaultData || defaults

        this.get().then(data => chapter ? (this.data[chapter] = data) : (this.data = data))
    }

    get() {
        return new Promise(resolve => {
            storage.sync.get(null, data => resolve(this.chapter ? data[this.chapter] : data))
        })
    }

    set(data) {
        return new Promise((resolve, reject) => {
            if (!data || !Object.keys(data).length) {
                reject(new Error ('No data is provided to set'))
            }
            data = this.chapter ? {
                ...this.data,
                [this.chapter]: data
            } : data;

            storage.sync.clear( () => storage.sync.set(data, result => resolve(result)))
        })
    }
}
