import React from 'react'

const Header = ({title, children}) => (
    <div className="uk-background-secondary uk-margin-large-bottom">
        <div className="uk-container uk-container-large">
            <div className="uk-grid uk-padding-small uk-padding-remove-left uk-padding-remove-right">
                <div className="uk-width-2-3">
                    <h1 className="uk-heading-bullet uk-text-large uk-light"><span>{title}</span></h1>
                </div>
                <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-between">
                    {children}
                </div>
            </div>
        </div>
    </div>
)

export default Header
