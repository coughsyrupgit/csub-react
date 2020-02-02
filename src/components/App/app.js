import React from 'react'
import './app.css'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit-core.css'
import Grid from '../UI/Grid'
import search from '../Search'
import SearchForm from '../UI/SearchForm'
import Tree from '../Tree';

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

    render() {
        return (
            <div>
                <div className="uk-background-secondary uk-margin-large-bottom">
                    <div className="uk-container uk-container-large">
                        <div className="uk-grid uk-padding-small uk-padding-remove-left uk-padding-remove-right">
                            <div className="uk-width-2-3">
                                <h1 className="uk-heading-bullet uk-text-large uk-light"><span>My Bookmarks</span></h1>
                            </div>
                            <div className="uk-width-1-3">
                                <SearchForm searchCallback={this.onSearch.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-container uk-container-large">
                    <Grid items={this.state.folders} tree={this.state.tree}/>
                </div>
            </div>
        )
    }
}

export default App;
