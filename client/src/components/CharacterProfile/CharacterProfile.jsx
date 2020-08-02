import React, {
    useState,
    useEffect
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    addCharacterProfile,
    getCharacterProfile,
    updateCharacterProfile,
    deleteCharacterProfile
} from '../../actions/characterProfile'
import CharacterProfileView from './CharacterProfileView'
import CharacterProfileForm from './CharacterProfileForm'
import {
    getParameterModels
} from '../../actions/parameterModel'
import {
    getDictionaries
} from '../../actions/dictionary'
import {
    getSkills
} from '../../actions/skill'

const CharacterProfile = ({
    isAuthenticated,
    addCharacterProfile,
    getCharacterProfile,
    updateCharacterProfile,
    deleteCharacterProfile,
    getParameterModels,
    getDictionaries,
    getSkills,
    characterProfile: {
        characterProfile,
        loading
    },
    parameterModel: {
        parameterModels
    },
    skill: {
        skills
    },
    dictionaries,
    match
}) => {
    useEffect(() => {
        getCharacterProfile(match.params.id)
        getParameterModels()
        getDictionaries()
        getSkills()
    }, [
        getCharacterProfile,
        getParameterModels,
        getDictionaries,
        getSkills,
        match.params.id
    ])

    useEffect(() => {
        if (
            !characterProfile ||
            !characterProfile.skills ||
            (
                characterSkills.length > 0 &&
                !characterSkills.find(x => !!x)
            )
        ) return

        let characterSkillsTemp = []
        characterProfile.skills.forEach((skill, skillIndex) => {
            const foundSkill = skills.find(x => x._id == skill.id)
            if (!!foundSkill) {
                characterSkillsTemp.push(foundSkill)
            }
        })
        setCharacterSkills(characterSkillsTemp)
    }, [
        characterProfile,
        skills
    ])

    const [isEditMode, setIsEditMode] = useState(false)

    const [characterSkills, setCharacterSkills] = useState([])

    const onSubmit = formData => {
        match.params.id == 0 ?
            addCharacterProfile(formData) :
            updateCharacterProfile(formData)
    }

    const onModeChange = e => {
        e && e.preventDefault()
        setIsEditMode(value => !value)
    }


    return loading ||
        !!!characterProfile ||
        !!!dictionaries ?
        <div></div> :
        (!isEditMode ?
            <CharacterProfileView
                isAuthenticated={isAuthenticated}
                characterProfile={characterProfile}
                characterSkills={characterSkills}
                dictionaries={dictionaries}
                onModeChange={onModeChange}
            /> : <CharacterProfileForm
                characterProfile={characterProfile}
                parameterModels={parameterModels}
                dictionaries={dictionaries}
                allSkills={skills}
                onModeChange={onModeChange}
                onSubmit={onSubmit}
            />)
}

CharacterProfile.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    addCharacterProfile: PropTypes.func.isRequired,
    getCharacterProfile: PropTypes.func.isRequired,
    updateCharacterProfile: PropTypes.func.isRequired,
    deleteCharacterProfile: PropTypes.func.isRequired,
    getParameterModels: PropTypes.func.isRequired,
    getDictionaries: PropTypes.func.isRequired,
    getSkills: PropTypes.func.isRequired,
    characterProfile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    characterProfile: state.characterProfile,
    parameterModel: state.parameterModel,
    dictionaries: state.dictionary.dictionaries,
    skill: state.skill
})

export default connect(
    mapStateToProps,
    {
        addCharacterProfile,
        getCharacterProfile,
        updateCharacterProfile,
        deleteCharacterProfile,
        getParameterModels,
        getDictionaries,
        getSkills
    }
)(CharacterProfile)