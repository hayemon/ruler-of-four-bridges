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

const DictionaryInput = ({
    index,
    control,
    register,
    setValue,
    dictionaries,
    fieldsName,
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

    return (
        <Grid container spacing={3} alignItems='center'>
            <Grid item xs={6}>
                <FormControl
                    variant='outlined'
                    fullWidth
                    size='small'>
                    <InputLabel id={`${fieldsName}[${index}].${dictionaryFieldName}-label`}>
                        {dictionaryFieldLabel}
                    </InputLabel>
                    <Controller
                        as={
                            <Select>
                                {
                                    dictionaries
                                        .map((dictionary, dictionaryIndex) =>
                                            <MenuItem
                                                key={dictionaryIndex}
                                                value={dictionary[dictionaryFieldValue]}
                                                onClick={() => {
                                                    setValue(`${fieldsName}[${index}].${modelFieldName}`, [])
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
                        id={`${fieldsName}[${index}].${dictionaryFieldName}`}
                        labelId={`${fieldsName}[${index}].${dictionaryFieldName}-label`}
                        label={dictionaryFieldLabel}
                        name={`${fieldsName}[${index}].${dictionaryFieldName}`}
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
                    id={`${fieldsName}[${index}].${modelFieldName}`}
                    label={modelFieldLabel}
                    name={`${fieldsName}[${index}].${modelFieldName}`}
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
                                    key={modelIndex}
                                >
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label={model[modelFieldDisplay]}
                                        onChange={e => {
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

                                            setValue(`${fieldsName}[${index}].${modelFieldName}`, modelsList)
                                        }}
                                    />
                                </Grid>
                            )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DictionaryInput