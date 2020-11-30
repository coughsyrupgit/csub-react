import React from 'react'

const Header = ({title, children, config}) => {
    let container_class_names = `${(config.dark_mode ? 'uk-background-secondary' : 'uk-background-default')} uk-margin-medium-bottom`,
        title_class_names = `uk-heading-bullet uk-text-large ${(config.dark_mode ? 'uk-light' : '')}`
    
    return (
        <div className={container_class_names}>
            <div className="uk-container uk-container-large">
                <div className="uk-grid uk-padding-small uk-padding-remove-left uk-padding-remove-right">
                    <div className="uk-width-2-3">
                        <h1 className={title_class_names}><span>{title}</span></h1>
                    </div>
                    <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-between">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
