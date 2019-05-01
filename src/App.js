import React from 'react'
import './App.css'
import 'uikit/dist/css/uikit-core.css'
import Grid from './components/Grid'
import SearchForm from './components/SearchForm'
import { logger } from 'handlebars';

const bookmarks = window.chrome.bookmarks;

const FolderObject = function (treeNode) {
    let links = treeNode.children.filter(function (item) {
        return !item.children
    });

    return {
        id: treeNode.id,
        title: treeNode.title,
        isHidden: false,
        links: links.map((elem) => Object.assign({}, elem, {
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

    prepareFolders(tree) {
        var self = this;

        tree.forEach((subtree) => {
            if (subtree.children) {
                if (subtree.children.filter((item) => !item.children).length) {
                    let folders = [].concat(self.state.folders);
                    folders.push(new FolderObject(subtree));
                    self.setState({
                        folders: folders
                    })
                }
                self.prepareFolders(subtree.children)
            }
        })
    }

    updateLinksVisibility(searchQuery) {
        let folders = [].concat(this.state.folders);

        folders.forEach(function (folder) {
            folder.isHidden = true;
            folder.links.forEach(function (link) {
                if (link.url.match(new RegExp(searchQuery)) || link.title.match(new RegExp(searchQuery)) || !searchQuery || searchQuery.length <= 2) {
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
            <div className="uk-container uk-container-large">
                <div className="uk-grid uk-padding uk-padding-remove-left uk-padding-remove-right uk-padding-remove-bottom">
                    <div className="uk-width-2-3">
                        <h1 className="uk-heading-bullet"><span>My Bookmarks</span></h1>
                    </div>
                    <div className="uk-width-1-3">
                        <SearchForm resultsCallback={this.updateLinksVisibility.bind(this)} />
                    </div>
                </div>
                <Grid items={this.state.folders} />
            </div>
        )
    }
}

export default App;
