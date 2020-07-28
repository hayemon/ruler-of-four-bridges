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

const useStyles = makeStyles((theme) => ({
}))

const DictionaryForm = ({
    models,
    onSubmit
}) => {
    const classes = useStyles()

    const { register, control, getValues } = useForm({
        defaultValues: {
            models: models
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'models'
    })

    return (
        <form
            className={classes.form}
            noValidate>

            <Grid container spacing={3} direction='column'>
                {fields.map((dictionary, index) =>
                    <Grid
                        item
                        key={dictionary._id || `newItem${index}`}>

                        <Grid container spacing={3}>
                            <Grid item xs={5}>
                                <TextField
                                    className='no-margin'
                                    inputRef={register()}
                                    variant='outlined'
                                    margin='normal'
                                    fullWidth
                                    id={`models[${index}].key`}
                                    label='Ключ'
                                    name={`models[${index}].key`}
                                    autoComplete='off'
                                    size='small'
                                    defaultValue={dictionary.key}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    className='no-margin'
                                    inputRef={register()}
                                    variant='outlined'
                                    margin='normal'
                                    fullWidth
                                    id={`models[${index}].value`}
                                    label='Значение'
                                    name={`models[${index}].value`}
                                    autoComplete='off'
                                    size='small'
                                    defaultValue={dictionary.value}
                                />
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
                    </Grid>
                )}
                <Grid item>
                    <SpaceBetweenGrid>
                        <Button
                            pulledright='true'
                            type='button'
                            variant='contained'
                            color='primary'
                            onClick={() => {
                                append({})
                            }}
                        >
                            <AddIcon />
                            <Typography
                                variant='inherit'
                                className='button-text'>
                                Добавить
                        </Typography>
                        </Button>
                        <Button
                            pulledright='true'
                            type='button'
                            variant='contained'
                            color='primary'
                            onClick={() => onSubmit(getValues().models)}
                        >
                            <DoneIcon />
                            <Typography
                                variant='inherit'
                                className='button-text'>
                                Сохранить
                        </Typography>
                        </Button>
                    </SpaceBetweenGrid>
                </Grid>
            </Grid>
        </form>
    );
}

DictionaryForm.propTypes = {
    models: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default DictionaryForm