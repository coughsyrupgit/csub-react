import React from 'react'
import './app.css'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit-core.css'
import Grid from '../UI/Grid'
import Header from '../UI/Header'
import search from '../Search'
import SearchForm from '../UI/SearchForm'
import Tree from '../Tree'
import ConfigurationForm, {ConfigToggle} from '../UI/ConfigurationForm'
import Configuration from '../Configuration'
import GlobalBackground from '../UI/GlobalBackground'
import ChromeApps from '../ChromeApps';

class App extends React.Component {
    constructor (props) {
        super(props);
        const tree = new Tree({
            updateCallback: this.onTreeUpdate.bind(this)
        });

        this.config = new Configuration();

        this.state = {
            tree: tree,
            folders: [],
            config: {},
            apps: []
        }

        tree.update()
        this.updateConfig();
    }

    componentDidMount(){
        UIkit.use(Icons);
    }

    updateConfig() {
        this.config.get().then(data => this.setState({config: data}))
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
                <GlobalBackground 
                    config={ this.state.config } />
                <Header
                    title="My Bookmarks"
                    config={ this.state.config } >
                    <SearchForm 
                    searchCallback={ this.onSearch.bind(this) }
                    submitCallback={ this.onSearchSubmit.bind(this) } />
                    <ConfigToggle />
                </Header>
                <div className="uk-container uk-container-large">
                    <ChromeApps
                        items={ this.state.apps }
                        config={ this.state.config } />
                    <Grid 
                        items={ this.state.folders }
                        tree={ this.state.tree }
                        config={ this.state.config } />
                </div>
                <ConfigurationForm
                    id="configForm"
                    title="Settings"
                    config={ this.state.config }
                    onConfigSave={ this.updateConfig.bind(this) } />
            </div>
        )
    }
}

export default App;
