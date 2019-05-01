import React from 'react'

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: ""
        }
    }

    onInputChange(event) {
        this.setState({
            query: event.target.value
        }, function () {
            this.props.resultsCallback(this.state.query)
        }.bind(this))
    }

    render() {
        return (
            <form className="uk-search uk-search-navbar uk-background-muted uk-padding-small">
                <input className="uk-search-input" type="search" placeholder="Search..." value={this.state.query} onChange={this.onInputChange.bind(this)}/>
            </form>
        )
    }
}