import Storage from '../Storage'
import options from './configuration-options'

const defaults = {
    config: Object.keys(options).reduce((config, key) => {
        config[key] = options[key].defaultValue
        return config
    }, {})
}

export default class Configuration extends Storage {
    constructor(defaultData) {
        super(defaultData || defaults);
    }
}
