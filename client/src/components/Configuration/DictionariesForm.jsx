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
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Paper,
    TextField,
    Toolbar,
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

    useEffect(() => {
        reset({
            dictionaries: dictionaries.map(dictionary => ({
                name: dictionary.name,
                code: dictionary.code
            }))
        })
    }, [dictionaries])

    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            dictionaries: dictionaries
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'dictionaries'
    })

    return (
        <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(formData => {
                onSubmit({
                    dictionaries: (formData &&
                        formData.dictionaries &&
                        formData.dictionaries.length > 0) ?

                        formData.dictionaries.map(
                            (dictionary, index) => {
                                if (dictionaries[index]) return {
                                    ...dictionary,
                                    _id: dictionaries[index]._id
                                }
                                else return dictionary
                            }
                        ) :
                        []
                })
            })}>


            <Grid container spacing={3} direction='column'>
                {fields.map((dictionary, index) =>
                    <Grid
                        item
                        key={dictionary._id || `newItem${index}`}>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3}>
                                <Grid item xs={5}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id={`dictionaries[${index}].name`}
                                        label='Название'
                                        name={`dictionaries[${index}].name`}
                                        autoComplete='off'
                                        size='small'
                                        defaultValue={dictionary.name}
                                    />
                                </Grid>

                                <Grid item xs={5}>
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
            </Grid>

            <Dialog
                open={!!dictionaryToEdit}
                fullWidth={true}
                maxWidth={'md'}
            >
                <DialogTitle>Set backup account</DialogTitle>

                {!!dictionaryToEdit &&
                    <DialogContent>
                        <DictionaryForm
                            models={dictionaryToEdit.models || []}
                            onSubmit={onSubmitDictionaryModels}
                        />
                    </DialogContent>
                }
            </Dialog>

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

DictionariesForm.propTypes = {
    dictionaries: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default DictionariesForm