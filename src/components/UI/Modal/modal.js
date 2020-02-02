import React from 'react'
import UIkit from 'uikit';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        UIkit.modal(`#${this.props.id}`);
    }

    render() {
        return (
            <div id={this.props.id} uk-modal>
                <div class="uk-modal-dialog uk-modal-body">
                    <h2 class="uk-modal-title">{this.props.title}</h2>
                    <button class="uk-modal-close" type="button">Close</button>
                </div>
            </div>
        )
    }
}
