import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
    addCharacterProfile,
    getCharacterProfile,
    updateCharacterProfile,
    deleteCharacterProfile
} from '../../actions/characterProfile'
import CharacterProfileView from './CharacterProfileView'
import CharacterProfileEditView from './CharacterProfileEditView'

const CharacterProfile = ({
    addCharacterProfile,
    getCharacterProfile,
    updateCharacterProfile,
    deleteCharacterProfile,
    characterProfile: {
        characterProfile,
        loading
    },
    match
}) => {
    useEffect(() => {
        getCharacterProfile(match.params.id)
    }, [getCharacterProfile, match.params.id])

    useEffect(() => {
        setFormData({...characterProfile})
    }, [characterProfile])

    const [formData, setFormData] = useState({ ...characterProfile })
    const [isEditMode, setIsEditMode] = useState(false)

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()

        match.params.id == 0 ?
            addCharacterProfile(formData) :
            updateCharacterProfile(formData)
    }

    const onModeChange = e => {
        e.preventDefault()
        setIsEditMode(value => !value)
    }

    return loading || !!!characterProfile ?
        <div></div> :
        (isEditMode ?
            <CharacterProfileEditView
                data={formData}
                onModeChange={e => onModeChange(e)}
                onSubmit={e => onSubmit(e)}
                onChange={e => onChange(e)} />
            : <CharacterProfileView
                data={characterProfile}
                onModeChange={e => onModeChange(e)} />)
}

CharacterProfile.propTypes = {
    addCharacterProfile: PropTypes.func.isRequired,
    getCharacterProfile: PropTypes.func.isRequired,
    updateCharacterProfile: PropTypes.func.isRequired,
    deleteCharacterProfile: PropTypes.func.isRequired,
    characterProfile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    characterProfile: state.characterProfile
})

export default connect(
    mapStateToProps,
    {
        addCharacterProfile,
        getCharacterProfile,
        updateCharacterProfile,
        deleteCharacterProfile
    }
)(CharacterProfile)