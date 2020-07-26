import React from 'react'
import PropTypes from 'prop-types'

import StatsView from './StatsView'

const Stats = ({
    stats,
    category,
    level
}) => {
    return stats ?
        <StatsView
            stats={stats.sort((a, b) => a.order - b.order)}
            category={category}
            level={level}
        /> : <div></div>
}

Stats.propTypes = {
    stats: PropTypes.array.isRequired,
    category: PropTypes.object.isRequired,
    level: PropTypes.number.isRequired
}

export default Stats