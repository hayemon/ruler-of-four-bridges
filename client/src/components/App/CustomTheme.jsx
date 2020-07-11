import { createMuiTheme } from '@material-ui/core/styles'
import {
    indigo,
    grey
} from '@material-ui/core/colors'

const customTheme = createMuiTheme({
    palette: {
        primary: {
            light: indigo[50],
            main: indigo[500],
            dark: indigo[900],

            white: 'white',
            grey: grey[50],
            black: grey[900]
        }
    },
})

export default customTheme