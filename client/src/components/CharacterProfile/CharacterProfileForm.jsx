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
    Grid,
    Paper,
    TextField,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { CancelSubmitToolbar } from '../Controls'
import CharacterProfileStatsForm from './CharacterProfileStatsForm'
import CharacterProfileDetailsForm from './CharacterProfileDetailsForm'
import CharacterProfileSkillsForm from './CharacterProfileSkillsForm'

const useStyles = makeStyles((theme) => ({
}))

const CharacterProfileForm = ({
    characterProfile,
    parameterModels,
    dictionaries,
    allSkills,
    onModeChange,
    onSubmit
}) => {
    const classes = useStyles()

    const {
        name,
        realName,
        imgUrl,
        details,
        description,
        stats,
        skills
    } = characterProfile

    const mergedStats = parameterModels
        .map(parameterModel => {
            const stat = stats ? stats.find(x => x.name === parameterModel.name) : null
            return {
                ...stat,
                relationType: parameterModel.relationType
            } ||
            {
                ...parameterModel,
                base: 0,
                change: 1
            }
        })

    const {
        register,
        control,
        handleSubmit,
        setValue
    } = useForm({
        defaultValues: {
            ...characterProfile,
            details: details,
            stats: mergedStats.sort((a, b) => a.order - b.order),
            skills: skills
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

    const skillsFieldArray = useFieldArray({
        control,
        name: 'skills'
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
                        details: formData.details || [],
                        stats: mergedStats
                            .map((stat, index) => {
                                delete stat._id
                                return {
                                    ...stat,
                                    ...formData.stats[index]
                                }
                            }),

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

                                <Grid item xs={12}>
                                    <TextField
                                        className='no-margin'
                                        inputRef={register()}
                                        variant='standard'
                                        margin='normal'
                                        fullWidth
                                        id='imgUrl'
                                        label='Ссылка на изображение'
                                        name='imgUrl'
                                        autoComplete='off'
                                        defaultValue={imgUrl}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <CharacterProfileDetailsForm
                            detailsFieldArray={detailsFieldArray}
                            control={control}
                            register={register}
                            setValue={setValue}
                            details={characterProfile.details || []}
                            dictionaries={dictionaries}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className='basic-padding'>
                            <TextField
                                inputRef={register()}
                                variant='standard'
                                margin='normal'
                                fullWidth
                                id='description'
                                label='Описание'
                                name='description'
                                autoComplete='off'
                                multiline
                                defaultValue={description}
                            />
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <CharacterProfileStatsForm
                            statsFieldArray={statsFieldArray}
                            register={register}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <CharacterProfileSkillsForm
                            skillsFieldArray={skillsFieldArray}
                            register={register}
                            control={control}
                            skills={skills || []}
                            allSkills={allSkills || []}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <CancelSubmitToolbar
                            onSubmit={() => { }}
                            onCancel={onModeChange}
                        />
                    </Grid>
                </Grid>
            </form>
        </Container >
    );
}

CharacterProfileForm.propTypes = {
    characterProfile: PropTypes.object.isRequired,
    parameterModels: PropTypes.array.isRequired,
    dictionaries: PropTypes.array.isRequired,
    onModeChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default CharacterProfileForm