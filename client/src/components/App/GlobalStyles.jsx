import backgroundImg from '../../../public/columns-background.png'
import marbleTexture from '../../../public/marble-texture.png'
import rockTexture from '../../../public/rock-texture.png'
import goldTexture from '../../../public/gold-texture.png'

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
            '.background-marble': {
                backgroundImage: `url(${marbleTexture})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            },
            '.background-rock-black': {
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9) ), url(${rockTexture})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            },
            '.background-gold': {
                background: `url(${goldTexture})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            },
            '.text-black': {
                'color': 'transparent',
                'background': `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9) ), url(${rockTexture})`,
                'background-size': 'cover',
                'background-clip': 'text',
                '-webkit-background-clip': 'text',
                'text-shadow': '-1px -1px 1px rgba(0,0,0,0.1)'
            },
            '.text-gold': {
                'color': 'transparent',
                'background': `url(${goldTexture})`,
                'background-size': 'cover',
                'background-clip': 'text',
                '-webkit-background-clip': 'text',
                'text-shadow': '-1px -1px 1px rgba(0,0,0,0.1)'
            },
            '.landing': {
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) ), url(${backgroundImg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            },
            '.landing-navbar': {
                backgroundColor: 'transparent',
                color: 'white'
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
                width: '100% !important',
                height: '100% !important'
            },
            '.fill-parent-width': {
                width: '100% !important'
            },
            '.fill-parent-height': {
                height: '100% !important'
            },


            '.button-text': {
                paddingLeft: theme.spacing(1),
                paddingRight: theme.spacing(1)
            },

            '.table-cell-name': {
                width: '40%'
            },
            '.table-cell-base': {
                width: '15%'
            },
            '.table-cell-change': {
                width: '15%'
            },
            '.table-cell-value': {
                width: '30%'
            }
        }
    }
}

export default globalStyles

