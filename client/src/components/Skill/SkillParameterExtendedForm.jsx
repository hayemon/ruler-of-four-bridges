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
                justify='center'
            >
                <Grid item xs={6}>
                    <FormControl
                        variant='outlined'
                        fullWidth
                        size='small'>
                        <InputLabel id={`${fieldName}.name-label`}>
                            Параметр
                        </InputLabel>
                        <Controller
                            as={
                                <Select>
                                    {
                                        parameterModels
                                            .map((parameterModel, parameterModelIndex) =>
                                                <MenuItem
                                                    key={parameterModelIndex}
                                                    value={parameterModel.name}
                                                >
                                                    {parameterModel.name}
                                                </MenuItem>
                                            )
                                    }
                                </Select>
                            }
                            className='no-margin'
                            id={`${fieldName}.name`}
                            labelId={`${fieldName}.name-label`}
                            label='Параметр'
                            name={`${fieldName}.name`}
                            control={control}
                            defaultValue=''
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        inputRef={register()}
                        variant='standard'
                        margin='normal'
                        fullWidth
                        id={`${fieldName}.name`}
                        label='Параметр'
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
        </Paper>
    );
}

export default SkillParameterExtendedForm