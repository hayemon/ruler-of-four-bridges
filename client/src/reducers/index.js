import { combineReducers } from 'redux'

import alert from './alert'
import auth from './auth'
import characterProfile from './characterProfile'
import parameterModel from './parameterModel'
import dictionary from './dictionary'
import skill from './skill'

export default combineReducers({
    alert,
    auth,
    characterProfile,
    parameterModel,
    dictionary,
    skill
})