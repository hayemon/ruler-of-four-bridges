import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addTemplate, getTemplate, updateTemplate, deleteTemplate } from '../../actions/template'
import TemplateView from './TemplateView'
import TemplateEditView from './TemplateEditView'

const Template = ({
    addTemplate,
    getTemplate,
    updateTemplate,
    deleteTemplate,
    template: {
        template,
        loading
    },
    match
}) => {
    useEffect(() => {
        getTemplate(match.params.id)
    }, [getTemplate, match.params.id])

    const [formData, setFormData] = useState({ ...template })
    const [isEditMode, setIsEditMode] = useState(false)

    const onChange = e => {
        console.log(formData)
        setFormData({ ...template, ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()

        match.params.id == 0 ?
            addTemplate(formData) :
            updateTemplate(formData)
    }

    const onModeChange = e => {
        e.preventDefault()
        setIsEditMode(value => !value)
    }

    return loading || !!!template ?
        <div></div> :
        (isEditMode ?
            <TemplateEditView
                data={template}
                onModeChange={e => onModeChange(e)}
                onSubmit={e => onSubmit(e)}
                onChange={e => onChange(e)} />
            : <TemplateView
                data={template}
                onModeChange={e => onModeChange(e)} />)
}

Template.propTypes = {
    addTemplate: PropTypes.func.isRequired,
    getTemplate: PropTypes.func.isRequired,
    updateTemplate: PropTypes.func.isRequired,
    deleteTemplate: PropTypes.func.isRequired,
    template: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    template: state.template
})

export default connect(
    mapStateToProps,
    {
        addTemplate,
        getTemplate,
        updateTemplate,
        deleteTemplate
    }
)(Template)