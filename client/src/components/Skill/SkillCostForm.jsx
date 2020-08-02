import React, {
    useState
} from 'react'
import PropTypes from 'prop-types'
import {
    useForm,
    useFieldArray,
    Controller
} from 'react-hook-form'
import {
    Container,
    Grid,
    Paper,
    TextField,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
}))

const SkillCostForm = ({
    field,
    fieldName,
    register
}) => {
    const classes = useStyles()

    field = field || {}

    return (
        <Paper
            variant='outlined'
            className='basic-padding'
        >
            <Grid
                container
                spacing={3}
                justify='center'
            >
                <Grid item xs={3}>
                    <TextField
                        inputRef={register()}
                        variant='standard'
                        margin='normal'
                        fullWidth
                        id={`${fieldName}.name`}
                        label='Название'
                        name={`${fieldName}.name`}
                        autoComplete='off'
                        defaultValue={field.name}
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        inputRef={register()}
                        variant='standard'
                        margin='normal'
                        fullWidth
                        id={`${fieldName}.base`}
                        label='База'
                        name={`${fieldName}.base`}
                        autoComplete='off'
                        defaultValue={field.base}
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        inputRef={register()}
                        variant='standard'
                        margin='normal'
                        fullWidth
                        id={`${fieldName}.change`}
                        label='Прирост'
                        name={`${fieldName}.change`}
                        autoComplete='off'
                        defaultValue={field.change}
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        inputRef={register()}
                        variant='standard'
                        margin='normal'
                        fullWidth
                        id={`${fieldName}.placeholder`}
                        label='Строка со значением'
                        name={`${fieldName}.placeholder`}
                        autoComplete='off'
                        defaultValue={field.placeholder || 'COST в секунду'}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default SkillCostForm