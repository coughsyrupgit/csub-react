import React from 'react';
import Abstract from './abstract';

export default class InputText extends Abstract {
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
