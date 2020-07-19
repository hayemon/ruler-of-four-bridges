import React, {
    Fragment,
    useEffect
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
    Toolbar,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    Add as AddIcon,
    Done as DoneIcon,
    Remove as RemoveIcon
} from '@material-ui/icons'

import { SpaceBetweenGrid } from '../Layout'

const useStyles = makeStyles((theme) => ({
}))

const ParameterModelsForm = ({
    data,
    onSubmit
}) => {
    const classes = useStyles()

    useEffect(() => {
        reset({
            parameterModels: data
        })
    }, [data])

    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            parameterModels: data
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'parameterModels'
    })

    return (
        <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(formData => {
                onSubmit({
                    parameterModels: (formData &&
                        formData.parameterModels &&
                        formData.parameterModels.length > 0) ?

                        formData.parameterModels.map(
                            (parameterModel, index) => {
                                if (data[index]) return {
                                    ...parameterModel,
                                    _id: data[index]._id
                                }
                                else return parameterModel
                            }
                        ) :
                        []
                })
            })}>


            <Grid container spacing={3} direction='column'>
                {fields.map((parameterModel, index) =>
                    <Grid
                        item
                        key={parameterModel._id || `newItem${index}`}>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
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

                                <Grid item xs={5}>
                                    <FormControl
                                        variant='outlined'
                                        fullWidth
                                        size='small'>
                                        <InputLabel id={`parameterModels[${index}].category-label`}>Категория</InputLabel>
                                        <Controller
                                            as={
                                                <Select>
                                                    <MenuItem value='main'>Основные</MenuItem>
                                                    <MenuItem value='physicalDamage'>Физический урон</MenuItem>
                                                    <MenuItem value='magicalDamage'>Магический урон</MenuItem>
                                                    <MenuItem value='physicalDefence'>Физическая защита</MenuItem>
                                                    <MenuItem value='magicalDefence'>Магическая защита</MenuItem>
                                                </Select>
                                            }
                                            className='no-margin'
                                            id={`parameterModels[${index}].category`}
                                            labelId={`parameterModels[${index}].category-label`}
                                            label='Категория'
                                            name={`parameterModels[${index}].category`}
                                            control={control}
                                            defaultValue={parameterModel.category || 'main'}
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
                                        size='small'>
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
            </Grid>

            <Toolbar disableGutters className={classes.toolbar}>
                <SpaceBetweenGrid>
                    <Button
                        pulledright='true'
                        type='button'
                        variant='contained'
                        color='primary'
                        onClick={() => {
                            append({})
                        }}>
                        <AddIcon />
                        <Typography
                            variant='inherit'
                            className='button-text'>
                            Добавить
                        </Typography>
                    </Button>
                    <Button
                        pulledright='true'
                        type='submit'
                        variant='contained'
                        color='primary'>
                        <DoneIcon />
                        <Typography
                            variant='inherit'
                            className='button-text'>
                            Сохранить
                        </Typography>
                    </Button>
                </SpaceBetweenGrid>
            </Toolbar>
        </form>
    );
}

ParameterModelsForm.propTypes = {
    data: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default ParameterModelsForm