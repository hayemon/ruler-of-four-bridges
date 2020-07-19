import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    getParameterModels
} from '../../actions/parameterModel'
import StatsView from './StatsView'

const Stats = ({
    getParameterModels,
    parameterModel: {
        parameterModels,
        loading
    }
}) => {
    useEffect(() => {
        getParameterModels()
    }, [getParameterModels])

    return !loading ?
        <StatsView data={parameterModels} /> : <div></div>
}

Stats.propTypes = {
    getParameterModels: PropTypes.func.isRequired,
    parameterModel: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    parameterModel: state.parameterModel
})

export default connect(
    mapStateToProps,
    {
        getParameterModels
    }
)(Stats)