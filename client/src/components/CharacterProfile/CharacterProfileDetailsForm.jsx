import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Paper,
    Switch
} from '@material-ui/core'
import {
    Add as AddIcon,
    Remove as RemoveIcon
} from '@material-ui/icons'

import { SpaceBetweenGrid } from '../Layout'
import {
    SelectDictionaryInput,
    KeyValueInput
} from '../Controls'

const CharacterProfileDetailsForm = ({
    detailsFieldArray,
    control,
    register,
    setValue,
    details,
    dictionaries
}) => {
    const [selectedDictionaries, setSelectedDictionaries] = useState(
        detailsFieldArray.fields
            .map(dictionary => ({}))
    )

    const [types, setTypes] = useState(
        detailsFieldArray.fields
            .map(dictionary => true)
    )

    const onFieldAppend = () => {
        setSelectedDictionaries([...selectedDictionaries, {}])
        setTypes([...types, true])
        detailsFieldArray.append({
            name: '',
            value: ''
        })
    }

    const onTypeSelect = (index) => {
        const typesCopy = [...types]
        typesCopy[index] = !typesCopy[index]
        setTypes(typesCopy)
    }

    const onDictionarySelect = (dictionary, index) => {
        const selectedDictionariesCopy = [...selectedDictionaries]
        selectedDictionariesCopy[index] = dictionary.code
        setSelectedDictionaries(selectedDictionariesCopy)
    }
    return (
        <Grid
            container
            spacing={3}
            direction='column'
        >
            {detailsFieldArray.fields.map((detail, index) =>
                <Grid
                    item
                    key={`characterProfileDetailsForm-details-${index}-key`}
                >
                    <Paper className='basic-padding'>
                        <Grid
                            container
                            spacing={3}
                            alignItems='center'
                        >
                            <Grid item xs={2}>
                                <FormControlLabel
                                    name={`details[${index}].type`}
                                    control={
                                        <Switch
                                            checked={types[index]}
                                            onChange={() => onTypeSelect(index)}
                                        />
                                    }
                                    label='Справочник'
                                />
                            </Grid>

                            {types[index] ? <Grid item xs={9}>
                                {
                                    dictionaries &&
                                    details &&
                                    <SelectDictionaryInput
                                        fieldName={`details[${index}]`}
                                        control={control}
                                        register={register}
                                        setValue={setValue}
                                        dictionaries={dictionaries}
                                        selectedDictionaryInitialValue={
                                            details[index] ?
                                                dictionaries.find(x =>
                                                    x.nameSingle == details[index].key
                                                ) : null
                                        }

                                        dictionaryFieldName='key'
                                        dictionaryFieldLabel='Ключ'
                                        dictionaryFieldValue='nameSingle'
                                        dictionaryFieldDisplay='name'
                                        dictionaryDefaultValue={detail.key}

                                        modelFieldName='value'
                                        modelFieldLabel='Значение'
                                        modelFieldValue='value'
                                        modelFieldDisplay='value'
                                        modelDefaultValue={detail.value}
                                    />
                                }
                            </Grid> :
                                <Grid item xs={9}>
                                    <KeyValueInput
                                        fieldName={`details[${index}]`}
                                        register={register}
                                    />
                                </Grid>
                            }

                            <Grid item xs={1}>
                                <IconButton
                                    edge='start'
                                    variant='contained'
                                    color='primary'
                                    onClick={() => detailsFieldArray.remove(index)}
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
                        onClick={onFieldAppend}
                    >
                        <AddIcon />
                    </IconButton>
                </SpaceBetweenGrid>
            </Grid>
        </Grid>
    );
}

CharacterProfileDetailsForm.propTypes = {
    detailsFieldArray: PropTypes.object.isRequired,
    control: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    details: PropTypes.array.isRequired,
    dictionaries: PropTypes.array.isRequired
}

export default CharacterProfileDetailsForm