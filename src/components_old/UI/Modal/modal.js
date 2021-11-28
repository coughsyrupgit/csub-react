import React from 'react'
import UIkit from 'uikit';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        UIkit.modal(`#${this.props.id}`);
    }

    close() {
        UIkit.modal(`#${this.props.id}`).hide()
    }

    open() {
        UIkit.modal(`#${this.props.id}`).show()
    }

    render() {
        return (
            <div id={this.props.id} uk-modal>
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">{this.props.title}</h2>
                    <button className="uk-modal-close" type="button">Close</button>
                </div>
            </div>
        )
    }
}
