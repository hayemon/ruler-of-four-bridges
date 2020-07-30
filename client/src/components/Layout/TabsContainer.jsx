import React, {
    Children,
    useState
} from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import {
    AppBar,
    Box,
    Container,
    Paper,
    Tabs,
    Tab,
    Typography
} from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    tabControlBar: {
        marginBottom: theme.spacing(2)
    }
}))

const TabsContainer = ({ children }) => {
    const classes = useStyles()

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Box className='full-width'>
            <AppBar position='static'>
                <Tabs
                    className='gold-text'
                    value={value}
                    onChange={handleChange}
                    indicatorColor='secondary'
                    textColor='inherit'
                    variant='fullWidth'
                    aria-label='full width tabs example'
                >
                    {Children.map(children, child =>
                        <Tab label={child.props.tablabel} />
                    )}
                </Tabs>
            </AppBar>
            {Children.map(children, (child, index) =>
                value == index ? <div>{child}</div> : <div></div>
            )}
        </Box>
    )
}

export default TabsContainer
