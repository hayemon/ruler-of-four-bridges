import React, {
    useState,
    useEffect
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
    Toolbar,
    Button,
    TextField,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done'

import { SpaceBetweenGrid } from '../Layout'

const useStyles = makeStyles((theme) => ({
}))

const CharacterProfileForm = ({
    data,
    onModeChange,
    onSubmit
}) => {
    const classes = useStyles()

    useEffect(() => {
        reset({
            details: data.details
        })
    }, [data])

    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            details: data.details
        }
    })

    const detailsFieldArray = useFieldArray({
        control,
        name: 'details'
    })

    return (
        <Container maxWidth='md' className='root'>
            <form
                className={classes.form}
                noValidate
                onSubmit={handleSubmit(formData => console.log(formData))}>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='standard'
                                        margin='normal'
                                        fullWidth
                                        id='name'
                                        label='Имя'
                                        name='name'
                                        autoComplete='off'
                                        defaultValue={data.name}
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='standard'
                                        margin='normal'
                                        fullWidth
                                        id='realName'
                                        label='Настоящее имя'
                                        name='realName'
                                        autoComplete='off'
                                        defaultValue={data.realName}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Grid
                                        container
                                        spacing={3}
                                        direction='column'
                                    >
                                        {detailsFieldArray.fields.map((detail, index) =>
                                            <Grid
                                                item
                                                key={index}
                                            >
                                                <TextField
                                                    className='no-margin'
                                                    inputRef={register()}
                                                    margin='normal'
                                                    fullWidth
                                                    id={`details[${index}].key`}
                                                    label='Название'
                                                    name={`details[${index}].key`}
                                                    autoComplete='off'
                                                    size='small'
                                                    defaultValue={detail.key}
                                                />
                                            </Grid>
                                        )}
                                    </Grid>
                                </Grid>

                                <Grid item xs={6}>
                                    <Grid
                                        container
                                        spacing={3}
                                        direction='column'
                                    >
                                        {detailsFieldArray.fields.map((detail, index) =>
                                            <Grid
                                                item
                                                key={index}
                                            >
                                                <TextField
                                                    className='no-margin'
                                                    multiline
                                                    inputRef={register()}
                                                    margin='normal'
                                                    fullWidth
                                                    id={`details[${index}].value`}
                                                    label='Значение'
                                                    name={`details[${index}].value`}
                                                    autoComplete='off'
                                                    size='small'
                                                    defaultValue={detail.value}
                                                />
                                            </Grid>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        inputRef={register()}
                                        variant='standard'
                                        margin='normal'
                                        fullWidth
                                        id='description'
                                        label='Имя'
                                        name='description'
                                        autoComplete='off'
                                        multiline
                                        defaultValue={data.description}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

                <Toolbar disableGutters>
                    <SpaceBetweenGrid>
                        <Button
                            pulledright='true'
                            type='submit'
                            variant='contained'
                            color='primary'
                        >
                            <DoneIcon />
                            <Typography
                                variant='inherit'
                                className='button-text'>
                                Сохранить
                            </Typography>
                        </Button>

                        <Button
                            pulledright='true'
                            edge='start'
                            variant='contained'
                            color='primary'
                            onClick={e => onModeChange(e)}
                        >
                            <EditIcon />
                            <Typography
                                variant='inherit'
                                className='button-text'>
                                Отмена
                            </Typography>
                        </Button>
                    </SpaceBetweenGrid>
                </Toolbar>
            </form>
        </Container >
    );
}

CharacterProfileForm.propTypes = {
    data: PropTypes.object.isRequired,
    onModeChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default CharacterProfileForm