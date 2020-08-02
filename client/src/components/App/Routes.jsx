import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import globalStyles from './GlobalStyles'
import customTheme from './CustomTheme'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Landing from '../Landing'
import Auth from '../Auth'
import NavBar from '../NavBar'
import Alerts from '../Alert'
import {
    CharacterProfiles,
    CharacterProfile
} from '../CharacterProfile'
import {
    Skills,
    Skill
} from '../Skill'
import {
    Configuration
} from '../Configuration'

const useStyles = makeStyles((theme) => ({
    ...globalStyles(theme)
}))

const Routes = () => {
    const classes = useStyles()

    return (
        <ThemeProvider theme={customTheme}>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='*' component={
                    () => (
                        <div className='root root-container background-marble'>
                            <NavBar />
                            <Alerts />
                            <Switch>
                                <Route exact path='/signin' component={
                                    () => <Auth isSignIn signUpLink='/signup' />
                                } />
                                {/* <Route exact path='/signup' component={
                                    () => <Auth isSignUp signInLink='/signin' />
                                } /> */}
                                <PublicRoute exact path='/characterProfiles' component={CharacterProfiles} />
                                <PublicRoute exact path='/characterProfiles/:id' component={CharacterProfile} />

                                <PublicRoute exact path='/skills' component={Skills} />
                                <PublicRoute exact path='/skills/:id' component={Skill} />

                                <PrivateRoute exact path='/configuration' component={Configuration} />
                            </Switch>
                        </div>
                    )
                } />
            </Switch>
        </ThemeProvider>
    )
}

export default Routes
