import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getCharacterProfiles } from '../../actions/characterProfile'
import CharacterProfilesView from './CharacterProfilesView'

const CharacterProfiles = ({
    getCharacterProfiles,
    characterProfile: { characterProfiles }
}) => {
    useEffect(() => {
        getCharacterProfiles()
    }, [getCharacterProfiles])

    return <CharacterProfilesView data={characterProfiles} />
}

CharacterProfiles.propTypes = {
    getCharacterProfiles: PropTypes.func.isRequired,
    characterProfile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    characterProfile: state.characterProfile
})

export default connect(
    mapStateToProps,
    { getCharacterProfiles }
)(CharacterProfiles)