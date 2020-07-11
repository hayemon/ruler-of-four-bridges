import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from '../../store'

import { loadUser } from '../../actions/auth'
import setAuthToken from '../../utils/setAuthToken'
import Routes from './Routes'

const App = () => {
    useEffect(() => {
        setAuthToken(localStorage.token)
        store.dispatch(loadUser())
    }, [])

    return (
        <Provider store={store}>
            <Router>
                <Routes />
            </Router>
        </Provider>
    )
}

export default App