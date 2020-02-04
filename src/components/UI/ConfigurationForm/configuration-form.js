import React from 'react'
import Modal from '../Modal'
import Configuration, { fields } from '../../Configuration'
import { InputText, Checkbox } from '../FormFields'

const getFieldsWithValues = (fields, config) => Object.keys(fields).reduce((fieldsArray, fieldKey) => {
        fieldsArray.push({
            ...fields[fieldKey],
            id: fieldKey,
            value: config.hasOwnProperty(fieldKey) ? config[fieldKey] : fields[fieldKey].defaultValue
        })
        return fieldsArray;
    }, [])

export default class ConfigurationForm extends Modal {
    constructor(props) {
        super(props);
        this.config = new Configuration();

        this.state = {
            fieldset: [],
            changedData: {}
        }

        this.config.get().then(data => this.setState({
            fieldset: getFieldsWithValues(fields, data)
        }))
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

        this.config.set(this.state.changedData).then(() => {
            if (this.props.onConfigSave) {
                this.props.onConfigSave()
            }
        })

        this.close();
    }

    render() {
        const additionalClassNames = this.props.config.dark_mode ? 'uk-background-secondary uk-light' : '';
        
        return (
            <div id={this.props.id} uk-modal>
                <div className={['uk-modal-dialog uk-modal-body', additionalClassNames].join(' ')}>
                    <h2 className="uk-modal-title">{this.props.title}</h2>
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
