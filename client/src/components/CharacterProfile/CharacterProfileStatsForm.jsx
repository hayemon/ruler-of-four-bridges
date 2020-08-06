import React from 'react'
import PropTypes from 'prop-types'
import {
    Grid,
    Paper,
    TextField,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
}))

const CharacterProfileStatsForm = ({
    statsFieldArray,
    register
}) => {
    const classes = useStyles()

    return (
        <Paper className='basic-padding'>
            <Grid container spacing={3} direction='column'>
                {statsFieldArray.fields
                    .map((stat, index) =>
                        <Grid
                            item
                            xs={12}
                            key={`characterProfileStatsForm-stats-${index}-key`}
                        >
                            <Grid
                                container
                                spacing={3}
                                alignItems='center'
                            >
                                <Grid item xs={3}>
                                    <Typography variant='button'>
                                        {stat.name}
                                    </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography variant='button'>
                                        {stat.relationType}
                                    </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        margin='normal'
                                        fullWidth
                                        id={`stats[${index}].base`}
                                        label='База'
                                        name={`stats[${index}].base`}
                                        autoComplete='off'
                                        size='small'
                                        defaultValue={stat.base}
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        margin='normal'
                                        fullWidth
                                        id={`stats[${index}].change`}
                                        label='Прирост'
                                        name={`stats[${index}].change`}
                                        autoComplete='off'
                                        size='small'
                                        defaultValue={stat.change}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
            </Grid>
        </Paper>
    );
}

CharacterProfileStatsForm.propTypes = {
    statsFieldArray: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired
}

export default CharacterProfileStatsForm