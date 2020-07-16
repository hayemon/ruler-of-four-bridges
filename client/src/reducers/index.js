import { combineReducers } from 'redux'

import alert from './alert'
import auth from './auth'
import characterProfile from './characterProfile'
import parameterModel from './parameterModel'

export default combineReducers({
    alert,
    auth,
    characterProfile,
    parameterModel
})