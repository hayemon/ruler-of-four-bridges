import React, {
    useState,
    useEffect
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Container
} from '@material-ui/core'

import {
    addSkill,
    getSkill,
    updateSkill,
    deleteSkill
} from '../../actions/skill'
import SkillView from './SkillView'
import SkillForm from './SkillForm'
import {
    getDictionaries
} from '../../actions/dictionary'
import {
    getParameterModels
} from '../../actions/parameterModel'

const Skill = ({
    isAuthenticated,
    addSkill,
    getSkill,
    updateSkill,
    deleteSkill,
    getDictionaries,
    getParameterModels,
    skill: {
        skill,
        loading
    },
    parameterModel: {
        parameterModels
    },
    dictionaries,
    match
}) => {
    useEffect(() => {
        getSkill(match.params.id)
        getDictionaries()
        getParameterModels()
    }, [
        getSkill,
        getDictionaries,
        getParameterModels,
        match.params.id
    ])

    const [isEditMode, setIsEditMode] = useState(false)

    const onSubmit = formData => {
        match.params.id == 0 ?
            addSkill(formData) :
            updateSkill(formData)
    }

    const onModeChange = e => {
        e && e.preventDefault()
        setIsEditMode(value => !value)
    }

    return loading ||
        !!!skill ||
        !!!dictionaries ||
        !!!parameterModels ?
        <div></div> :
        (!isEditMode ?
            <Container maxWidth='md' className='root'>
                <SkillView
                    isAuthenticated={isAuthenticated}
                    skill={skill}
                    onModeChange={onModeChange}
                />
            </Container> :
            <SkillForm
                skill={skill}
                dictionaries={dictionaries}
                parameterModels={parameterModels}
                onModeChange={onModeChange}
                onSubmit={onSubmit}
            />)
}

Skill.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addSkill: PropTypes.func.isRequired,
    getSkill: PropTypes.func.isRequired,
    updateSkill: PropTypes.func.isRequired,
    deleteSkill: PropTypes.func.isRequired,
    getDictionaries: PropTypes.func.isRequired,
    getParameterModels: PropTypes.func.isRequired,
    skill: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    skill: state.skill,
    dictionaries: state.dictionary.dictionaries,
    parameterModel: state.parameterModel
})

export default connect(
    mapStateToProps,
    {
        addSkill,
        getSkill,
        updateSkill,
        deleteSkill,
        getDictionaries,
        getParameterModels
    }
)(Skill)