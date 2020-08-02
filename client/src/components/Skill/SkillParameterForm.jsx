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
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    Paper,
    TextField,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { CancelSubmitToolbar } from '../Controls'
import { DictionaryInput } from '../Controls'

const useStyles = makeStyles((theme) => ({
}))

const SkillParameterForm = ({
    field,
    fieldName,
    fieldLabel,
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
            >
                <Grid item xs={6}>
                    <TextField
                        inputRef={register()}
                        variant='standard'
                        margin='normal'
                        fullWidth
                        id={`${fieldName}.base`}
                        label={fieldLabel}
                        name={`${fieldName}.base`}
                        autoComplete='off'
                        multiline
                        defaultValue={field.base}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        inputRef={register()}
                        variant='standard'
                        margin='normal'
                        fullWidth
                        id={`${fieldName}.change`}
                        label='Прирост'
                        name={`${fieldName}.change`}
                        autoComplete='off'
                        multiline
                        defaultValue={field.change}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default SkillParameterForm