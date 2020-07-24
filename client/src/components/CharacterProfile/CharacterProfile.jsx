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

const CharacterProfile = ({
    addCharacterProfile,
    getCharacterProfile,
    updateCharacterProfile,
    deleteCharacterProfile,
    getParameterModels,
    characterProfile: {
        characterProfile,
        loading
    },
    parameterModel: {
        parameterModels
    },
    match
}) => {
    useEffect(() => {
        getCharacterProfile(match.params.id)
        getParameterModels()
    }, [getCharacterProfile, match.params.id])

    const [isEditMode, setIsEditMode] = useState(false)

    const onSubmit = formData => {
        console.log(formData)
        match.params.id === 0 ?
            addCharacterProfile(formData) :
            updateCharacterProfile(formData)
    }

    const onModeChange = e => {
        e && e.preventDefault()
        setIsEditMode(value => !value)
    }

    return loading || !!!characterProfile ?
        <div></div> :
        (!isEditMode ?
            <CharacterProfileView
                characterProfile={characterProfile}
                onModeChange={onModeChange}
            /> : <CharacterProfileForm
                characterProfile={characterProfile}
                parameterModels={parameterModels}
                onModeChange={onModeChange}
                onSubmit={onSubmit}
            />)
}

CharacterProfile.propTypes = {
    addCharacterProfile: PropTypes.func.isRequired,
    getCharacterProfile: PropTypes.func.isRequired,
    updateCharacterProfile: PropTypes.func.isRequired,
    deleteCharacterProfile: PropTypes.func.isRequired,
    getParameterModels: PropTypes.func.isRequired,
    characterProfile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    characterProfile: state.characterProfile,
    parameterModel: state.parameterModel
})

export default connect(
    mapStateToProps,
    {
        addCharacterProfile,
        getCharacterProfile,
        updateCharacterProfile,
        deleteCharacterProfile,
        getParameterModels
    }
)(CharacterProfile)