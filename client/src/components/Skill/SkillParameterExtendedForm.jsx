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
import {
    Autocomplete
} from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
}))

const SkillParameterExtendedForm = ({
    field,
    fieldName,
    register,
    control,
    parameterModels
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
                alignItems='stretch'
            >
                <Grid item xs={6}>
                    <Autocomplete
                        id={`${fieldName}.name`}
                        options={parameterModels}
                        getOptionLabel={(option) => option.name}
                        margin='normal'
                        fullWidth
                        id={`${fieldName}.name`}
                        name={`${fieldName}.name`}
                        defaultValue={field.name}

                        renderInput={(params) =>
                            <TextField
                                {...params}
                                variant='outlined'
                                label='Параметр'
                            />
                        }
                    />
                </Grid>

                <Grid item xs={6}>
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

                <Grid item xs={6}>
                    <TextField
                        inputRef={register()}
                        variant='standard'
                        margin='normal'
                        fullWidth
                        id={`${fieldName}.placeholder`}
                        label='Строка со значением'
                        name={`${fieldName}.placeholder`}
                        autoComplete='off'
                        defaultValue={field.placeholder || 'PARAMETER'}
                    />
                </Grid>
            </Grid>
        </Paper >
    );
}

export default SkillParameterExtendedForm