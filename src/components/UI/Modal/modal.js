import React from 'react'
import UIkit from 'uikit'

export default class Modal extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            bookmark: this.props.bookmark
        }
    }

    render() {
        return (
            <div>
                <div id="linkModal" uk-modal>
                    <div class="uk-modal-dialog uk-modal-body">
                        <h2 class="uk-modal-title">Edit the bookmark</h2>
                        <button class="uk-modal-close" type="button">Close</button>
                    </div>
                </div>
            </div>
        )
    }
}
