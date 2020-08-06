import React, {
    useState
} from 'react'
import PropTypes from 'prop-types'
import {
    Controller
} from 'react-hook-form'
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from '@material-ui/core'
import {
    Add as AddIcon,
    Remove as RemoveIcon
} from '@material-ui/icons'

const SelectDictionaryInput = ({
    fieldName,
    control,
    register,
    setValue,
    dictionaries,
    selectedDictionaryInitialValue,

    dictionaryFieldName,
    dictionaryFieldLabel,
    dictionaryFieldValue,
    dictionaryFieldDisplay,
    dictionaryDefaultValue,

    modelFieldName,
    modelFieldLabel,
    modelFieldValue,
    modelFieldDisplay,
    modelDefaultValue
}) => {
    const [selectedDictionary, setSelectedDictionary] = useState(selectedDictionaryInitialValue)

    const [checkedModels, setCheckedModels] = useState(
        selectedDictionaryInitialValue ?
            selectedDictionaryInitialValue.models.map(model => false) :
            []
    )

    const onCheck = (e, modelIndex) => {
        let currentModelsCheckedStates = [...checkedModels]
        if (e.target.checked) {
            currentModelsCheckedStates[modelIndex] = true
        }
        else {
            currentModelsCheckedStates[modelIndex] = false
        }
        setCheckedModels(currentModelsCheckedStates)

        let currentCheckedModels = []
        selectedDictionary.models.forEach((modelLocal, modelLocalIndex) => {
            if (!!currentModelsCheckedStates[modelLocalIndex]) {
                currentCheckedModels.push(modelLocal)
            }
        })

        let modelsList = ''
        currentCheckedModels.forEach((checkedModel, checkedModelIndex) => {
            modelsList =
                modelsList +
                checkedModel.value.toString() +
                (checkedModelIndex < currentCheckedModels.length - 1 ? ', ' : '')
        })

        setValue(`${fieldName}.${modelFieldName}`, modelsList)
    }

    return (
        <Grid container spacing={3} alignItems='center'>
            <Grid item xs={6}>
                <FormControl
                    variant='outlined'
                    fullWidth
                    size='small'>
                    <InputLabel id={`${fieldName}.${dictionaryFieldName}-label`}>
                        {dictionaryFieldLabel}
                    </InputLabel>
                    <Controller
                        as={
                            <Select>
                                {
                                    dictionaries
                                        .map((dictionary, dictionaryIndex) =>
                                            <MenuItem
                                                key={`selectDictionaryInput-dictionaries-${dictionaryIndex}-key`}
                                                value={dictionary[dictionaryFieldValue]}
                                                onClick={() => {
                                                    setValue(`${fieldName}.${modelFieldName}`, [])
                                                    setCheckedModels(dictionary.models.map(model => false))
                                                    setSelectedDictionary(dictionary)
                                                }}
                                            >
                                                {dictionary[dictionaryFieldDisplay]}
                                            </MenuItem>
                                        )
                                }
                            </Select>
                        }
                        className='no-margin'
                        id={`${fieldName}.${dictionaryFieldName}`}
                        labelId={`${fieldName}.${dictionaryFieldName}-label`}
                        label={dictionaryFieldLabel}
                        name={`${fieldName}.${dictionaryFieldName}`}
                        control={control}
                        defaultValue={dictionaryDefaultValue || ''}
                    />
                </FormControl>

                <TextField
                    multiline
                    inputRef={register()}
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    id={`${fieldName}.${modelFieldName}`}
                    label={modelFieldLabel}
                    name={`${fieldName}.${modelFieldName}`}
                    autoComplete='off'
                    defaultValue={modelDefaultValue || ''}
                />
            </Grid>

            <Grid item xs={6}>
                <Grid
                    container
                    spacing={3}
                    direction='column'
                >
                    {
                        selectedDictionary &&
                        selectedDictionary.models &&
                        selectedDictionary.models
                            .map((model, modelIndex) =>
                                <Grid
                                    item
                                    key={`selectDictionaryInput-selectedDictionary-${modelIndex}-key`}
                                >
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label={model[modelFieldDisplay]}
                                        onChange={e => onCheck(e, modelIndex)}
                                    />
                                </Grid>
                            )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SelectDictionaryInput