import React from 'react'
import './app.css'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit-core.css'
import Grid from '../Grid'
import SearchForm from '../SearchForm'
import { logger } from 'handlebars';

const bookmarks = window.chrome.bookmarks;

class Folder {
    constructor(treeNode) {
        const links = treeNode.children.filter(item => !item.children);
        const {id, title} = treeNode;

        this.id = id;
        this.title = title;
        this.iShidden = false;
        this.links = links.map((elem) => ({
            ...elem,
            isHidden: false
        }))
    }
}

class App extends React.Component {
    constructor (props) {
        super(props);
        bookmarks.getTree(this.prepareFolders.bind(this));

        this.state = {
            tree : [],
            folders: []
        }
    }

    componentDidMount(){
        UIkit.use(Icons);
    }

    prepareFolders(tree) {
        var self = this;

        tree.forEach((subtree) => {
            if (subtree.children) {
                if (subtree.children.filter((item) => !item.children).length) {
                    let folders = [...self.state.folders];
                    folders.push(new Folder(subtree));
                    self.setState({
                        folders: folders
                    })
                }
                self.prepareFolders(subtree.children)
            }
        })
    }

    updateLinksVisibility(searchQuery) {
        let folders = [...this.state.folders];

        folders.forEach(function (folder) {
            folder.isHidden = true;
            if (folder.title.match(new RegExp(searchQuery, 'i'))) {
                folder.isHidden = false
                folder.links.forEach((link) => link.isHidden = false)
                return
            }
            folder.links.forEach(function (link) {
                if (link.url.match(new RegExp(searchQuery, 'i')) || link.title.match(new RegExp(searchQuery, 'i')) || !searchQuery || searchQuery.length <= 2) {
                    folder.isHidden = false;
                    link.isHidden = false;
                } else {
                    link.isHidden = true;
                }
            })
        })

        this.setState({
            folders: folders
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
                                <SearchForm resultsCallback={this.updateLinksVisibility.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-container uk-container-large">
                    <Grid items={this.state.folders} />
                </div>
            </div>
        )
    }
}

export default App;
