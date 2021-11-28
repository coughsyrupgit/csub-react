import React from 'react'
import Model from './model'
import Tiles from '../UI/Tiles'

export default class ChoromeApps extends React.Component {
    constructor(props) {
        super(props);

        const appsData = new Model();

        this.state = {
            items: []
        }

        this.updateApps(appsData);
    }

    async updateApps(model){
        const apps = await model.update();

        this.setState({
            items: apps
        })
    }

    render() {
        return this.props.config.show_apps ? (
            <Tiles
                items={ this.state.items }
                config={ this.props.config } />
        ) : null
    }
}
