import React from 'react'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value || false
        }
    }

    onChange(evt) {
        this.setState({
            value: evt.target.checked
        })

        if (this.props.onChangeCallback) {
            this.props.onChangeCallback(evt)
        }
    }

    render() {
        return (
            <div className="uk-margin">
                <label>
                    <input className="uk-checkbox" type="checkbox" checked={this.state.value} name={this.props.id} onChange={this.onChange.bind(this)} />
                    <span class="uk-margin-left">{this.props.label}</span>
                </label>
            </div>
        )
    }
}
