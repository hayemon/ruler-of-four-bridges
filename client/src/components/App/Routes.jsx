import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import globalStyles from './GlobalStyles'

import PrivateRoute from './PrivateRoute'
import Auth from '../Auth'
import NavBar from '../NavBar'
import Alerts from '../Alert'
import {
    CharacterProfiles,
    CharacterProfile
} from '../CharacterProfile'
import {
    Configuration
} from '../Configuration'

const useStyles = makeStyles((theme) => ({
    ...globalStyles(theme)
}))

const Routes = () => {
    const classes = useStyles()

    return (
        <div className='root root-container background-grey'>
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
                <PrivateRoute exact path='/configuration' component={Configuration} />
            </Switch>
        </div>
    )
}

export default Routes
