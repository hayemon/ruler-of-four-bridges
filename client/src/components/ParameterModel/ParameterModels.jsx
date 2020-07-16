import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getParameterModels } from '../../actions/parameterModel'
import ParameterModelsForm from './ParameterModelsForm'

const ParameterModels = ({
    getParameterModels,
    parameterModel: { parameterModels }
}) => {
    useEffect(() => {
        getParameterModels()
    }, [getParameterModels])

    const onChange = e => { }

    const onSubmit = e => { }

    return <ParameterModelsForm
        data={parameterModels}
        onChange={onChange}
        onSubmit={onSubmit} />
}

ParameterModels.propTypes = {
    getParameterModels: PropTypes.func.isRequired,
    parameterModel: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    parameterModel: state.parameterModel
})

export default connect(
    mapStateToProps,
    { getParameterModels }
)(ParameterModels)