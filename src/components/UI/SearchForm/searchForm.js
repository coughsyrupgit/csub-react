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
            this.props.searchCallback(this.state.query)
        }.bind(this))
    }

    componentDidMount() {
        this.searchInput.focus()
    }

    setInputRef(input) {
        this.searchInput = input
    }

    render() {
        return (
            <form className="uk-search uk-flex uk-flex-middle" onSubmit={this.props.submitCallback}>
                <div className="uk-width-auto uk-margin-small-right">
                    <span data-uk-icon="search"></span>
                </div>
                <div className="uk-width-expand">
                    <input className="uk-search-input uk-text-large" type="search" placeholder="Search..." value={this.state.query} onChange={this.onInputChange.bind(this)} ref={this.setInputRef.bind(this)}/>
                </div>
            </form>
        )
    }
}
