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
    CharacterProfiles,
    CharacterProfile
} from '../CharacterProfile'
import {
    ParameterModels
} from '../ParameterModel'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: customTheme.palette.primary.grey,
        fontFamily: customTheme.typography.fontFamily,
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
                <PrivateRoute exact path='/characterProfiles' component={CharacterProfiles} />
                <PrivateRoute exact path='/characterProfiles/:id' component={CharacterProfile} />
                <PrivateRoute exact path='/parameterModels' component={ParameterModels} />
            </Switch>
        </div>
    )
}

export default Routes
