import { createMuiTheme } from '@material-ui/core/styles'
import {
    indigo,
    grey,
    teal,
    blueGrey,
    yellow
} from '@material-ui/core/colors'

const customTheme = createMuiTheme({
    palette: {
        primary: {
            light: grey[50],
            main: grey[900],
            dark: grey[900]
        },
        secondary: {
            light: yellow[50],
            main: yellow[600],
            dark: yellow[900]
        }
    },
    overrides: {
        MuiFormControl: {
            root: {
            }
        },
    },
})

export default customTheme