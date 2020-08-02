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
    fieldName,
    fieldLabel,
    defaultValue,
    modelFieldDisplay,
    register,
    setValue,
    dictionary
}) => {
    const [checkedModels, setCheckedModels] = useState(
        dictionary ?
            dictionary.models.map(model => false) :
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
        dictionary.models.forEach((modelLocal, modelLocalIndex) => {
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

        setValue(fieldName, modelsList)
    }

    return (
        <Grid container spacing={3} alignItems='center'>
            <Grid item xs={12}>
                <TextField
                    multiline
                    inputRef={register()}
                    variant='outlined'
                    margin='normal'
                    fullWidth
                    id={fieldName}
                    label={fieldLabel}
                    name={fieldName}
                    autoComplete='off'
                    defaultValue={defaultValue || ''}
                />
            </Grid>

            <Grid item xs={12}>
                <Grid
                    container
                    spacing={3}
                >
                    {
                        dictionary &&
                        dictionary.models &&
                        dictionary.models
                            .map((model, modelIndex) =>
                                <Grid
                                    item
                                    key={modelIndex}
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

export default DictionaryInput