import React from 'react'
import Modal from '../Modal'
import Configuration, { fields } from '../../Configuration';

export default class ConfigurationForm extends Modal {
    constructor(props) {
        super(props);
        this.config = new Configuration();

        this.state = {
            fieldset: []
        }

        this.config.getData().then(data => this.setState({
            fieldset: this.getFieldsWithValues(fields, data)
        }))
    }

    getFieldsWithValues(fields, config) {
        const fieldset = Object.keys(fields).reduce((fieldsArray, fieldKey) => {
            fieldsArray.push({
                ...fields[fieldKey],
                value: config[fieldKey] || fields[fieldKey].defaultValue
            })
            return fieldsArray;
        }, [])

        return fieldset;
    }

    getRenderedFieldset(fieldset) {
        if (!fieldset) return false;

        return fieldset.reduce((renderedFieldset, field) => {
            switch (field.type) {
                case "checkbox" :
                    renderedFieldset.push(
                       <div className="uk-margin">
                            <label><input className="uk-checkbox" type="checkbox" defaultChecked={field.value} /><span class="uk-margin-left">{field.label}</span></label>
                       </div>
                    )
                    break;
                default: 
                    renderedFieldset.push(
                        <div className="uk-margin">
                            <label className="uk-form-label" for="form-stacked-text">{field.label}</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" type="text" placeholder={field.placeholder} />
                            </div>
                        </div>
                    )
                    break;
            }
            return renderedFieldset
        }, [])
    }

    render() {
        return (
            <div id={this.props.id} uk-modal>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">{this.props.title}</h2>
                    <form action="#">
                        {this.getRenderedFieldset(this.state.fieldset)}
                    </form>
                    <p class="uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    </p>
                </div>
            </div>
        )
    }
}
