import React from 'react'
import Modal from '../Modal'
import Storage from '../../Storage'
import Configuration, { fields } from '../../Configuration'
import { InputText, Checkbox } from '../FormFields'

export default class ConfigurationForm extends Modal {
    constructor(props) {
        super(props);
        this.config = new Configuration();

        this.state = {
            fieldset: [],
            changedData: {}
        }

        this.config.get().then(data => this.setState({
            fieldset: this.getFieldsWithValues(fields, data)
        }))
    }

    getFieldsWithValues(fields, config) {
        const fieldset = Object.keys(fields).reduce((fieldsArray, fieldKey) => {
            fieldsArray.push({
                ...fields[fieldKey],
                id: fieldKey,
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
                       <Checkbox {...field} onChangeCallback={this.onFormChange.bind(this)} />
                    )
                    break;
                default: 
                    renderedFieldset.push(
                        <InputText {...field} onChangeCallback={this.onFormChange.bind(this)}/>
                    )
                    break;
            }
            return renderedFieldset
        }, [])
    }

    onFormChange(evt) {
        const optionId = evt.target.name;
        const updatedState = {};

        updatedState[optionId] = (evt.target.type == 'checkbox') ? evt.target.checked : evt.target.value

        this.setState({
            changedData: updatedState
        })
    }

    onFormSubmit(evt) {
        evt.preventDefault();

        this.config.set(this.state.changedData).then(result => {
            console.log('Config successfully saved', result)
            this.config.get().then(result => console.log('new config', result))
            new Storage().get().then(data => console.log('full storage', data))
        })
    }

    render() {
        return (
            <div id={this.props.id} uk-modal>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">{this.props.title}</h2>
                    <form action="#" onSubmit={this.onFormSubmit.bind(this)}>
                        {this.getRenderedFieldset(this.state.fieldset)}
                        <p class="uk-text-right">
                            <button type="submit" className="uk-button uk-button-primary uk-margin-right">Save</button>
                            <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}
