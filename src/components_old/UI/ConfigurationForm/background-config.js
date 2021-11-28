import React from 'react';
import AbstractField from '../FormFields/abstract';
import { ChromePicker } from 'react-color';

export default class BackgroundConfig extends AbstractField {
    getRenderedPickers(values) {
        return values.map((color, index) => (
            <div className="uk-margin-top uk-margin-right">
                <button type="button" className="uk-button uk-padding-small" style={{backgroundColor: this.state.value[index] }} />
                <div data-uk-drop="mode: click">
                    <ChromePicker
                        color={ this.state.value[index] }
                        disableAlpha={ true }
                        onChangeComplete={ (color, event) => this.handleChange(color, index) }
                    />
                </div>
            </div>
            )
        )
    }

    handleChange(color, index) {
        let value = this.state.value;

        value.splice(index, 1, color.hex)

        this.setState({
            value: value
        })

        if (this.props.onChangeCallback) {
            this.props.onChangeCallback({
                target: {
                    name: 'background_config',
                    type: 'custom',
                    value: value
                }
            })
        }
    }

    render() {
        return (
            <div className="uk-flex uk-flex-left uk-margin-bottom">
                {this.getRenderedPickers(this.state.value)}
            </div>
        )
    }
}
