const globalStyles = theme => {
    return {
        '@global': {
            'body': {
                margin: 0
            },
            '.root-container': {
                fontFamily: theme.typography.fontFamily,
                minHeight: '100vh'
            },

            '.root': {
                flexGrow: 1
            },

            '.background-grey': {
                backgroundColor: theme.palette.grey[200]
            },

            '.nullify': {
                margin: '0 !important',
                padding: '0 !important'
            },
            '.no-margin': {
                margin: '0 !important'
            },
            '.no-padding': {
                padding: '0 !important'
            },

            '.basic-padding': {
                padding: theme.spacing(2)
            },
            '.small-padding': {
                padding: theme.spacing(1)
            },

            '.basic-margin': {
                margin: theme.spacing(2)
            },
            '.small-margin': {
                margin: theme.spacing(1)
            },

            '.fill-parent': {
                width: '100%',
                height: '100%'
            },

            '.button-text': {
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(1)
            },
        }
    }
}

export default globalStyles

