import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    addParameterModel,
    getParameterModels,
    updateParameterModel,
    deleteParameterModel
} from '../../actions/parameterModel'
import {
    getDictionaries
} from '../../actions/dictionary'
import ParameterModelsForm from './ParameterModelsForm'

const ParameterModels = ({
    addParameterModel,
    getParameterModels,
    updateParameterModel,
    deleteParameterModel,
    getDictionaries,
    parameterModel: {
        parameterModels,
        loading
    },
    parameterCategories
}) => {
    useEffect(() => {
        getParameterModels()
        getDictionaries()
    }, [getParameterModels, getDictionaries])

    const onSubmit = formData => {
        const parameterModelsToDelete = parameterModels.filter(parameterModel => {
            if (!formData ||
                !formData.parameterModels ||
                formData.parameterModels.length == 0 ||
                !formData.parameterModels.find(x => x._id == parameterModel._id))
                return parameterModel
            else
                return
        })

        parameterModelsToDelete.forEach(parameterModel =>
            deleteParameterModel(parameterModel._id)
        )

        formData.parameterModels.forEach(parameterModel => {
            if (parameterModel._id) {
                updateParameterModel(parameterModel)
            } else {
                addParameterModel(parameterModel)
            }
        })
    }

    return !loading && parameterModels && parameterCategories ?
        <ParameterModelsForm
            parameterModels={parameterModels}
            parameterCategories={parameterCategories}
            onSubmit={onSubmit}
        /> : <div></div>
}

ParameterModels.propTypes = {
    addParameterModel: PropTypes.func.isRequired,
    getParameterModels: PropTypes.func.isRequired,
    updateParameterModel: PropTypes.func.isRequired,
    deleteParameterModel: PropTypes.func.isRequired,
    getDictionaries: PropTypes.func.isRequired,
    parameterModel: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    parameterModel: state.parameterModel,
    parameterCategories: state.dictionary.dictionaries.find(x => x.code == 'PARAMETER_CATEGORIES')
})

export default connect(
    mapStateToProps,
    {
        addParameterModel,
        getParameterModels,
        updateParameterModel,
        deleteParameterModel,
        getDictionaries
    }
)(ParameterModels)