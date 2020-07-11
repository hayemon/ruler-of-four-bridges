import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getTemplates } from '../../actions/template'
import TemplatesView from './TemplatesView'

const Templates = ({
    getTemplates,
    template: { templates }
}) => {
    useEffect(() => {
        getTemplates()
    }, [getTemplates])

    return <TemplatesView data={templates} />
}

Templates.propTypes = {
    getTemplates: PropTypes.func.isRequired,
    template: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    template: state.template
})

export default connect(
    mapStateToProps,
    { getTemplates }
)(Templates)