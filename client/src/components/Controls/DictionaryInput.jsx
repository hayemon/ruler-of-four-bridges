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

    modelFieldName,
    modelFieldLabel,
    modelFieldValue,
    modelFieldDisplay
}) => {
    const [selectedDictionary, setSelectedDictionary] = useState(selectedDictionaryInitialValue)

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
                        defaultValue=''
                    />
                </FormControl>

                <TextField
                    inputRef={register()}
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    id={`${fieldsName}[${index}].${modelFieldName}`}
                    label={modelFieldLabel}
                    name={`${fieldsName}[${index}].${modelFieldName}`}
                    autoComplete='off'
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
                                <Grid item>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label={model[modelFieldDisplay]}
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