import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const PublicRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
    <Route
      {...rest}
      render={props =>
        loading ?
          <div></div> :
          <Component {...props} isAuthenticated={isAuthenticated} />
      }
    />
  )

PublicRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PublicRoute)
