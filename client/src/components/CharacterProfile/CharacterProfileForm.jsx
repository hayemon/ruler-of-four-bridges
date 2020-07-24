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
import {
    Close as CloseIcon,
    Done as DoneIcon
} from '@material-ui/icons'

import { SpaceBetweenGrid } from '../Layout'

const useStyles = makeStyles((theme) => ({
}))

const CharacterProfileForm = ({
    characterProfile,
    parameterModels,
    onModeChange,
    onSubmit
}) => {
    const classes = useStyles()

    useEffect(() => {
        reset({
            details: details
        })
    }, [characterProfile])

    const { name, realName, details, description, stats, skills } = characterProfile

    const mergedStats = parameterModels.map(parameterModel => {
        const stat = stats.find(x => x.name === parameterModel.name)
        return stat ||
        {
            ...parameterModel,
            base: 0,
            change: 1,
            valueBasic: 0,
            valueFinal: 0
        }
    })

    const { register, control, handleSubmit, reset } = useForm({
        defaultValues: {
            ...characterProfile,
            details: details,
            stats: mergedStats

        }
    })

    const detailsFieldArray = useFieldArray({
        control,
        name: 'details'
    })

    const statsFieldArray = useFieldArray({
        control,
        name: 'stats'
    })

    return (
        <Container maxWidth='md' className='root'>
            <form
                className={classes.form}
                noValidate
                onSubmit={handleSubmit(formData => {
                    onSubmit({
                        ...characterProfile,
                        ...formData,
                        stats: mergedStats.map((stat, index) => {
                            delete stat._id
                            return {
                                ...stat,
                                ...formData.stats[index]
                            }
                        })
                    })
                    onModeChange()
                })}>

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
                                        defaultValue={name}
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
                                        defaultValue={realName}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3} direction='column'>
                                {detailsFieldArray.fields.map((detail, index) =>
                                    <Grid
                                        item
                                        xs={12}
                                        key={index}
                                    >
                                        <Grid
                                            container
                                            spacing={3}
                                            alignItems='stretch'
                                        >
                                            <Grid
                                                item
                                                xs={6}
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
                                            <Grid
                                                item
                                                xs={6}
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
                                        </Grid>
                                    </Grid>
                                )}
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
                                        defaultValue={description}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className='basic-padding'>
                            <Grid container spacing={3} direction='column'>
                                {statsFieldArray.fields.map((stat, index) =>
                                    <Grid
                                        item
                                        xs={12}
                                        key={index}
                                    >
                                        <Grid
                                            container
                                            spacing={3}
                                            alignItems='center'
                                        >
                                            <Grid item xs={3}>
                                                <Typography variant='button'>
                                                    {stat.name}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={3}>
                                                <Typography variant='button'>
                                                    {stat.relationType}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={3}>
                                                <TextField
                                                    className='no-margin'
                                                    inputRef={register()}
                                                    margin='normal'
                                                    fullWidth
                                                    id={`stats[${index}].base`}
                                                    label='База'
                                                    name={`stats[${index}].base`}
                                                    autoComplete='off'
                                                    size='small'
                                                    defaultValue={stat.base}
                                                />
                                            </Grid>

                                            <Grid item xs={3}>
                                                <TextField
                                                    className='no-margin'
                                                    inputRef={register()}
                                                    margin='normal'
                                                    fullWidth
                                                    id={`stats[${index}].change`}
                                                    label='Прирост'
                                                    name={`stats[${index}].change`}
                                                    autoComplete='off'
                                                    size='small'
                                                    defaultValue={stat.change}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )}
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
                            color='secondary'
                            onClick={e => onModeChange(e)}
                        >
                            <CloseIcon />
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
    characterProfile: PropTypes.object.isRequired,
    parameterModels: PropTypes.array.isRequired,
    onModeChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default CharacterProfileForm