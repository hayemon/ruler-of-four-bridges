import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Controller
} from 'react-hook-form'
import {
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Switch,
    TextField,
    Typography
} from '@material-ui/core'
import {
    Add as AddIcon,
    Remove as RemoveIcon
} from '@material-ui/icons'

import { SpaceBetweenGrid } from '../Layout'

const CharacterProfileSkillsForm = ({
    skillsFieldArray,
    register,
    control,
    skills,
    allSkills
}) => {
    return (
        <Grid
            container
            spacing={3}
            direction='column'
        >
            {skillsFieldArray.fields.map((skill, index) =>
                <Grid item key={`skills-${index}-key`}>
                    <Paper className='basic-padding'>
                        <Grid
                            container
                            spacing={3}
                            alignItems='stretch'
                        >
                            <Grid item xs={4}>
                                <FormControl
                                    variant='outlined'
                                    fullWidth
                                >
                                    <InputLabel id={`skills[${index}].id-label`}>
                                        Ссылка
                                    </InputLabel>
                                    <Controller
                                        as={
                                            <Select>
                                                {allSkills &&
                                                    allSkills
                                                        .map(skillPreset =>
                                                            <MenuItem
                                                                key={skillPreset._id}
                                                                value={skillPreset._id}
                                                            >
                                                                {skillPreset.name}
                                                            </MenuItem>
                                                        )
                                                }
                                            </Select>
                                        }
                                        id={`skills[${index}].id`}
                                        labelId={`skills[${index}].id-label`}
                                        label='Ссылка'
                                        name={`skills[${index}].id`}
                                        control={control}
                                        defaultValue=''
                                        className='select-flex-stretch-margin'
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item xs={4}>
                                <TextField
                                    inputRef={register()}
                                    variant='outlined'
                                    margin='normal'
                                    fullWidth
                                    id={`skills[${index}].category`}
                                    label='Категория'
                                    name={`skills[${index}].category`}
                                    autoComplete='off'
                                    defaultValue=''
                                />
                            </Grid>

                            <Grid item xs={3}>
                                <TextField
                                    inputRef={register()}
                                    variant='standard'
                                    margin='normal'
                                    fullWidth
                                    id={`skills[${index}].order`}
                                    label='Порядок'
                                    name={`skills[${index}].order`}
                                    autoComplete='off'
                                    defaultValue=''
                                />
                            </Grid>

                            <Grid item xs={1}>
                                <IconButton
                                    edge='start'
                                    variant='contained'
                                    color='primary'
                                    onClick={() => skillsFieldArray.remove(index)}
                                >
                                    <RemoveIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            )}
            <Grid item>
                <SpaceBetweenGrid>
                    <IconButton
                        pulledright='true'
                        edge='start'
                        variant='contained'
                        color='primary'
                        onClick={() => skillsFieldArray.append({})}
                    >
                        <AddIcon />
                    </IconButton>
                </SpaceBetweenGrid>
            </Grid>
        </Grid>
    );
}

export default CharacterProfileSkillsForm