import React, {
    useState
} from 'react'
import PropTypes from 'prop-types'
import {
    Controller
} from 'react-hook-form'
import {
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
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
    register,
    control
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
                <Grid item xs={4}>
                    <FormControl
                        variant='outlined'
                        fullWidth
                    >
                        <InputLabel id={`${fieldName}.relationType-label`}>
                            Тип зависимости
                        </InputLabel>
                        <Controller
                            as={
                                <Select>
                                    <MenuItem value='none'>Нет</MenuItem>
                                    <MenuItem value='linear'>y = a + b * x</MenuItem>
                                    <MenuItem value='exponential'>y = a + b * (c ^ x)</MenuItem>
                                </Select>
                            }
                            className='no-margin'
                            id={`${fieldName}.relationType`}
                            labelId={`${fieldName}.relationType-label`}
                            label='Тип зависимости'
                            name={`${fieldName}.relationType`}
                            control={control}
                            defaultValue=''
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={4}>
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

                <Grid item xs={4}>
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