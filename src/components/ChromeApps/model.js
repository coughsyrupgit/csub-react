import React from 'react';

const management = window.chrome.management;

export default class ChromeApps {
    constructor(props) {
        this.apps = [];
    }

    update() {
        return new Promise((resolve) => {
            management.getAll(apps => {
                return resolve(apps ? apps.filter(item => item.isApp) : [])
            })
        })
    }
}
