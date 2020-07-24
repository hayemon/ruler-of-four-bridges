import React from 'react'
import PropTypes from 'prop-types'

import StatsView from './StatsView'

const Stats = ({
    stats
}) => {
    return stats ?
        <StatsView stats={stats} /> : <div></div>
}

Stats.propTypes = {
    stats: PropTypes.array.isRequired
}

export default Stats