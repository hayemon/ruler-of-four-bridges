import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    addParameterModel,
    getParameterModels,
    updateParameterModel,
    deleteParameterModel
} from '../../actions/parameterModel'
import ParameterModelsForm from './ParameterModelsForm'

const ParameterModels = ({
    addParameterModel,
    getParameterModels,
    updateParameterModel,
    deleteParameterModel,
    parameterModel: {
        parameterModels,
        loading
    }
}) => {
    useEffect(() => {
        getParameterModels()
    }, [getParameterModels])

    const onSubmit = data => {
        const parameterModelsToDelete = parameterModels.filter(parameterModel => {
            if (!data ||
                !data.parameterModels ||
                data.parameterModels.length == 0 ||
                !data.parameterModels.find(x => x._id == parameterModel._id))
                return parameterModel
            else
                return
        })

        parameterModelsToDelete.forEach(parameterModel =>
            deleteParameterModel(parameterModel._id)
        )

        data.parameterModels.forEach(parameterModel => {
            if (parameterModel._id) {
                updateParameterModel(parameterModel)
            } else {
                addParameterModel(parameterModel)
            }
        })
    }

    return !loading ?
        <ParameterModelsForm
            data={parameterModels}
            onSubmit={onSubmit}
        /> : <div></div>
}

ParameterModels.propTypes = {
    addParameterModel: PropTypes.func.isRequired,
    getParameterModels: PropTypes.func.isRequired,
    updateParameterModel: PropTypes.func.isRequired,
    deleteParameterModel: PropTypes.func.isRequired,
    parameterModel: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    parameterModel: state.parameterModel
})

export default connect(
    mapStateToProps,
    {
        addParameterModel,
        getParameterModels,
        updateParameterModel,
        deleteParameterModel
    }
)(ParameterModels)