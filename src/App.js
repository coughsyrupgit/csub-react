import React from 'react'
import './App.css'
import 'uikit/dist/css/uikit-core.css'
import Grid from './components/Grid'
import { logger } from 'handlebars';

const bookmarks = window.chrome.bookmarks;

const FolderObject = function (treeNode) {
    let links = treeNode.children.filter(function (item) {
        return !item.children
    });

    return {
        id: treeNode.id,
        title: treeNode.title,
        links: links
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
                    self.setState(Object.assign(self.state, {
                        folders: folders
                    }))
                }
                self.prepareFolders(subtree.children)
            }
        })
    }

    render() {
        return (
            <div className="uk-container uk-container-large">
                <h1 className="uk-heading-line uk-margin-top uk-margin-medium-bottom"><span>My Bookmarks</span></h1>
                <Grid items={this.state.folders} />
            </div>
        )
    }
}

export default App;
