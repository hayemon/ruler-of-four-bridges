import { combineReducers } from 'redux'

import alert from './alert'
import auth from './auth'
import template from './template'

export default combineReducers({
    alert,
    auth,
    template
})