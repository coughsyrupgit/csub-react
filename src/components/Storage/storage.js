const storage = window.chrome.storage;

const defaults = {
    config: {}
}

export default class Storage {
    constructor(defaultData) {
        this.data = defaultData || defaults;
        this.getData(this.data).then(data => this.data = data)
    }

    getData(defaultData) {
        if (!defaultData) defaultData = this.data;

        return new Promise(resolve => {
            storage.sync.get(defaultData, data => resolve(data))
        })
    }

    setData(data) {
        return new Promise((resolve, reject) => {
            if (!data) reject(new Error ('No data is provided to set'))
            storage.sync.set(data, result => resolve(result))
        })
    }
}
