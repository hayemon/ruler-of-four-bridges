import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import {
    Container,
    Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { AddToolbar } from '../Controls'
import SkillItemView from './SkillItemView'

const SkillsView = ({
    skills
}) => {
    const history = useHistory()

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
            <Grid item>
                <AddToolbar
                    onAdd={() => {
                        history.push('/skills/0')
                    }}
                />
            </Grid>
        </Grid>
    );
}

export default SkillsView