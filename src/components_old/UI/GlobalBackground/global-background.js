import React from 'react';
import './global-background.css';

const getBackgroundStyles = (config) => {
    return config.background_config ? {
        background: `linear-gradient(to right, ${config.background_config.join(', ')})`
    } : null
}

export default ({config}) => (
    <div className="global-background" style={ getBackgroundStyles(config) }></div>
)
