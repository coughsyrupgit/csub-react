const storage = window.chrome.storage;

const defaults = {}

export default class Storage {
    constructor(defaultData, chapter) {
        this.chapter = chapter;

        this.data = {}
        
        if (chapter) {
            this.data[chapter] = defaultData || defaults
        } else {
            this.data = defaultData || defaults
        }

        this.get(this.data).then(data => chapter ? (this.data[chapter] = data) : (this.data = data))
    }

    get() {
        return new Promise(resolve => {
            storage.sync.get(this.data, data => resolve(this.chapter ? data[this.chapter] : data))
        })
    }

    set(data) {
        return new Promise((resolve, reject) => {
            if (!data || !Object.keys(data).length) {
                reject(new Error ('No data is provided to set'))
            }
            let prepared_data = this.chapter ? {
                ...this.data,
                [this.chapter]: Object.assign({}, this.data[this.chapter], data)
            } : Object.assign({}, this.data, data);

            this.data = prepared_data;

            storage.sync.clear( () => storage.sync.set(prepared_data, result => resolve(result)))
        })
    }

    addListener(handler) {
        storage.onChanged.addListener(handler)
    }
}
