import React from 'react'
import './app.css'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit-core.css'
import Grid from '../UI/Grid'
import search from '../Search'
import SearchForm from '../UI/SearchForm'
import Tree from '../Tree'
import ConfigurationForm from '../UI/ConfigurationForm'
import Configuration from '../Configuration'

class App extends React.Component {
    constructor (props) {
        super(props);
        const tree = new Tree({
            updateCallback: this.onTreeUpdate.bind(this)
        });

        this.state = {
            tree: tree,
            folders: []
        }

        tree.update()
    }

    componentDidMount(){
        UIkit.use(Icons);
    }

    onTreeUpdate({folders}) {
        this.setState({
            folders: folders
        })
    }

    onSearch(searchQuery) {
        this.setState({
            folders: search.getResults(this.state.tree.folders, searchQuery)
        })
    }

    onSearchSubmit(evt) {
        evt.preventDefault();

        if ((this.state.folders.length == 1) && (this.state.folders[0].links.length == 1)) {
            window.location = this.state.folders[0].links[0].url
        }

        return false
    }

    render() {
        return (
            <div>
                <div className="uk-background-secondary uk-margin-large-bottom">
                    <div className="uk-container uk-container-large">
                        <div className="uk-grid uk-padding-small uk-padding-remove-left uk-padding-remove-right">
                            <div className="uk-width-2-3">
                                <h1 className="uk-heading-bullet uk-text-large uk-light"><span>My Bookmarks</span></h1>
                            </div>
                            <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-between">
                                <SearchForm searchCallback={this.onSearch.bind(this)} submitCallback={this.onSearchSubmit.bind(this)} />
                                <button type="button" className="uk-icon-settings" uk-icon="settings" uk-toggle="target: #configForm"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-container uk-container-large">
                    <Grid items={this.state.folders} tree={this.state.tree}/>
                </div>
                <ConfigurationForm id="configForm" title="Settings" />
            </div>
        )
    }
}

export default App;
