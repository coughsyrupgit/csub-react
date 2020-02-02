import React from 'react';

export default class InputText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value || ''
        }
    }

    onChange(evt) {
        this.setState({
            value: evt.target.value
        })

        if (this.props.onChangeCallback) {
            this.props.onChangeCallback(evt)
        }
    }

    render() {
        return (
            <div className="uk-margin">
                <label className="uk-form-label" for="form-stacked-text">{this.props.label}</label>
                <div className="uk-form-controls">
                    <input className="uk-input" type="text" placeholder={this.props.placeholder} name={this.props.id} onChange={this.onChange.bind(this)} value={this.state.value} />
                </div>
            </div>
        )
    }
}
