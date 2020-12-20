const config_options = {
    area_one_title : {
        type            : 'legend',
        defaultValue    : null,
        label           : 'Appearence'
    },
    dark_mode : {
        type            : 'checkbox',
        defaultValue    : true,
        label           : 'Dark Mode'
    },
    area_two_title : {
        type            : 'legend',
        defaultValue    : null,
        label           : 'Background'
    },
    background_config: {
        type            : 'background_config',
        defaultValue    : ['#f64f59', '#c471ed','#12c2e9'],
        label           : 'First color'
    },
    area_three_title : {
        type            : 'legend',
        defaultValue    : null,
        label           : 'Tools'
    },
    show_apps: {
        type            : 'checkbox',
        defaultValue    : false,
        label           : 'Show Chrome applications'
    }
}

export default config_options
