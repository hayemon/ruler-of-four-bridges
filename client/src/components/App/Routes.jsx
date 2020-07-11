import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import customTheme from './CustomTheme'
import PrivateRoute from './PrivateRoute'
import Auth from '../Auth'
import NavBar from '../NavBar'
import Alerts from '../Alert'
import {
    Templates,
    Template
} from '../Template'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: customTheme.palette.primary.grey,
        height: '100vh'
    }
}))

const Routes = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <NavBar />
            <Alerts />
            <Switch>
                <Route exact path='/' />
                <Route exact path='/signin' component={
                    () => <Auth isSignIn signUpLink='/signup' />
                } />
                <Route exact path='/signup' component={
                    () => <Auth isSignUp signInLink='/signin' />
                } />
                <PrivateRoute exact path='/templates' component={Templates} />
                <PrivateRoute exact path='/templates/:id' component={Template} />
            </Switch>
        </div>
    )
}

export default Routes
