import React from 'react'
import PropTypes from 'prop-types'
import {
    useForm,
    useFieldArray,
    Controller
} from 'react-hook-form'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    Add as AddIcon,
    Done as DoneIcon,
    Edit as EditIcon,
    Remove as RemoveIcon
} from '@material-ui/icons'

import { SpaceBetweenGrid } from '../Layout'
import { AddSubmitToolbar } from '../Controls'
import DictionaryForm from './DictionaryForm'

const useStyles = makeStyles((theme) => ({
}))

const DictionariesForm = ({
    dictionaries,
    dictionaryToEdit,
    onOpenDictionaryForm,
    onSubmitDictionaryModels,
    onSubmit
}) => {
    const classes = useStyles()

    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            dictionaries: dictionaries
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'dictionaries'
    })

    const onFieldAppend = () => append({})

    return (
        <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(formData => {
                onSubmit({
                    dictionaries: (formData &&
                        formData.dictionaries &&
                        formData.dictionaries.length > 0) ?

                        formData.dictionaries
                            .map(
                                (dictionary, index) => {
                                    if (dictionaries[index]) return {
                                        ...dictionary,
                                        _id: dictionaries[index]._id,
                                        models: dictionaries[index].models
                                    }
                                    else return dictionary
                                }
                            ) : []
                })
            })}>


            <Grid container spacing={3} direction='column'>
                {fields.map((dictionary, index) =>
                    <Grid
                        item
                        key={dictionary._id || `newItem${index}`}>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id={`dictionaries[${index}].name`}
                                        label='Название справочника'
                                        name={`dictionaries[${index}].name`}
                                        autoComplete='off'
                                        size='small'
                                        defaultValue={dictionary.name}
                                    />
                                </Grid>

                                <Grid item xs={3}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id={`dictionaries[${index}].nameSingle`}
                                        label='Название поля'
                                        name={`dictionaries[${index}].nameSingle`}
                                        autoComplete='off'
                                        size='small'
                                        defaultValue={dictionary.nameSingle}
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id={`dictionaries[${index}].code`}
                                        label='Код'
                                        name={`dictionaries[${index}].code`}
                                        autoComplete='off'
                                        size='small'
                                        defaultValue={dictionary.code}
                                    />
                                </Grid>

                                <Grid item xs={1}>
                                    <IconButton
                                        type='button'
                                        variant='contained'
                                        color='primary'
                                        onClick={() => {
                                            onOpenDictionaryForm(dictionaries[index] || null)
                                        }}
                                    >
                                        <EditIcon />
                                    </IconButton>
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

            {!!dictionaryToEdit &&
                <Dialog
                    open={!!dictionaryToEdit}
                    fullWidth={true}
                    maxWidth={'md'}
                >
                    <DialogTitle>{dictionaryToEdit.name}</DialogTitle>
                    <DialogContent>
                        <DictionaryForm
                            models={dictionaryToEdit.models || []}
                            onSubmit={onSubmitDictionaryModels}
                        />
                    </DialogContent>
                </Dialog>
            }
        </form >
    );
}

DictionariesForm.propTypes = {
    dictionaries: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default DictionariesForm