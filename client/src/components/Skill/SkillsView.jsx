import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import {
    Grid
} from '@material-ui/core'

import { AddToolbar } from '../Controls'
import SkillItemView from './SkillItemView'

const SkillsView = ({
    isAuthenticated,
    skills
}) => {
    const history = useHistory()
console.log(isAuthenticated)
    return (
        <Grid
            container
            spacing={3}
            direction='column'
        >
            {
                skills
                    .map(skillItem => (
                        <Grid key={skillItem._id} item xs container>
                            <SkillItemView
                                _id={skillItem._id}
                                name={skillItem.name}
                                imgUrl={skillItem.imgUrl}
                                code={skillItem.code}
                                description={skillItem.description}
                            />
                        </Grid>
                    ))
            }
            {isAuthenticated &&
                <Grid item>
                    <AddToolbar
                        onAdd={() => {
                            history.push('/skills/0')
                        }}
                    />
                </Grid>
            }
        </Grid>
    );
}

export default SkillsView