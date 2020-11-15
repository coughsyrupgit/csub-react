import React from 'react';

export default class Abstract extends React.Component {
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
}
