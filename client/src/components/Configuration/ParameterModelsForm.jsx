import React, {
    Fragment
} from 'react'
import PropTypes from 'prop-types'
import {
    useForm,
    useFieldArray,
    Controller
} from 'react-hook-form'
import {
    Button,
    Container,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    Add as AddIcon,
    Done as DoneIcon,
    Remove as RemoveIcon
} from '@material-ui/icons'

import { SpaceBetweenGrid } from '../Layout'
import { AddSubmitToolbar } from '../Controls'

const useStyles = makeStyles((theme) => ({
}))

const ParameterModelsForm = ({
    parameterModels,
    parameterCategories,
    onSubmit
}) => {
    const classes = useStyles()

    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            parameterModels: parameterModels.sort((a, b) => a.order - b.order)
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'parameterModels'
    })

    const onFieldAppend = () => append({})

    return (
        <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(formData => {
                onSubmit({
                    parameterModels: (formData &&
                        formData.parameterModels &&
                        formData.parameterModels.length > 0) ?

                        formData.parameterModels
                            .map(
                                (parameterModel, index) => {
                                    if (parameterModels[index]) return {
                                        ...parameterModel,
                                        _id: parameterModels[index]._id
                                    }
                                    else return parameterModel
                                }
                            ) : []
                })
            })}>


            <Grid container spacing={3} direction='column'>
                {fields.map((parameterModel, index) =>
                    <Grid
                        item
                        key={parameterModel._id || `newItem${index}`}>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id={`parameterModels[${index}].name`}
                                        label='Название характеристики'
                                        name={`parameterModels[${index}].name`}
                                        autoComplete='off'
                                        size='small'
                                        defaultValue={parameterModel.name}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id={`parameterModels[${index}].code`}
                                        label='Код'
                                        name={`parameterModels[${index}].code`}
                                        autoComplete='off'
                                        size='small'
                                        defaultValue={parameterModel.code}
                                    />
                                </Grid>

                                <Grid item xs={5}>
                                    <FormControl
                                        variant='outlined'
                                        fullWidth
                                        size='small'>
                                        <InputLabel id={`parameterModels[${index}].category-label`}>Категория</InputLabel>
                                        <Controller
                                            as={
                                                <Select>
                                                    {parameterCategories &&
                                                        parameterCategories.models &&
                                                        parameterCategories.models
                                                            .map((parameterCategory, parameterCategoryIndex) =>
                                                                <MenuItem
                                                                    key={parameterCategoryIndex}
                                                                    value={parameterCategory.key}
                                                                >
                                                                    {parameterCategory.value}
                                                                </MenuItem>
                                                            )
                                                    }
                                                </Select>
                                            }
                                            className='no-margin'
                                            id={`parameterModels[${index}].category`}
                                            labelId={`parameterModels[${index}].category-label`}
                                            label='Категория'
                                            name={`parameterModels[${index}].category`}
                                            control={control}
                                            defaultValue={parameterCategories && parameterCategories.models ? 'main' : ''}
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={3}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id={`parameterModels[${index}].order`}
                                        label='Порядок'
                                        name={`parameterModels[${index}].order`}
                                        autoComplete='off'
                                        size='small'
                                        defaultValue={parameterModel.order}
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <FormControl
                                        variant='outlined'
                                        fullWidth
                                    >
                                        <InputLabel>Тип зависимости</InputLabel>
                                        <Controller
                                            as={
                                                <Select>
                                                    <MenuItem value='none'>Нет</MenuItem>
                                                    <MenuItem value='linear'>y = a + b * x</MenuItem>
                                                    <MenuItem value='exponential'>y = a + b * (c ^ x)</MenuItem>
                                                </Select>
                                            }
                                            className='no-margin'
                                            variant='outlined'
                                            id={`parameterModels[${index}].relationType`}
                                            labelId={`parameterModels[${index}].relationType-label`}
                                            label='Тип зависимости'
                                            name={`parameterModels[${index}].relationType`}
                                            control={control}
                                            defaultValue={parameterModel.relationType || 'linear'}
                                            className='select-flex-stretch-margin'
                                        />
                                    </FormControl>
                                </Grid>

                                <Grid item xs={1}>
                                    <IconButton
                                        type='button'
                                        variant='contained'
                                        color='primary'
                                        onClick={() => {
                                            remove(index)
                                        }}
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                )}
                <Grid item>
                    <AddSubmitToolbar
                        onSubmit={() => { }}
                        onAdd={onFieldAppend}
                    />
                </Grid>
            </Grid>
        </form>
    );
}

ParameterModelsForm.propTypes = {
    parameterModels: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default ParameterModelsForm