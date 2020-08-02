import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    Container
} from '@material-ui/core'

import { getSkills } from '../../actions/skill'
import SkillsView from './SkillsView'

const Skills = ({
    isAuthenticated,
    getSkills,
    skill: { skills }
}) => {
    useEffect(() => {
        getSkills()
    }, [getSkills])

    return <Container maxWidth='md' className='root'>
        <SkillsView
            isAuthenticated={isAuthenticated}
            skills={skills}
        />
    </Container>
}

Skills.propTypes = {
    getSkills: PropTypes.func.isRequired,
    skill: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    skill: state.skill
})

export default connect(
    mapStateToProps,
    { getSkills }
)(Skills)