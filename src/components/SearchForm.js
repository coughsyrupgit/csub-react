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
            <form className="uk-search uk-flex uk-flex-middle">
                <div className="uk-width-auto uk-margin-small-right">
                    <span data-uk-icon="search"></span>
                </div>
                <div className="uk-width-expand">
                    <input className="uk-search-input uk-background-secondary uk-text-large uk-light" type="search" placeholder="Search..." value={this.state.query} onChange={this.onInputChange.bind(this)}/>
                </div>
            </form>
        )
    }
}