import React, {
    useState
} from 'react'
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
    Select,
    TextField
} from '@material-ui/core'
import {
    Add as AddIcon,
    Remove as RemoveIcon
} from '@material-ui/icons'

const KeyValueInput = ({
    fieldName,
    register
}) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField
                    className='no-margin'
                    inputRef={register()}
                    variant='standard'
                    margin='normal'
                    fullWidth
                    id={`${fieldName}.key`}
                    label='Ключ'
                    name={`${fieldName}.key`}
                    autoComplete='off'
                />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    className='no-margin'
                    inputRef={register()}
                    variant='standard'
                    margin='normal'
                    fullWidth
                    id={`${fieldName}.value`}
                    label='Значение'
                    name={`${fieldName}.value`}
                    autoComplete='off'
                />
            </Grid>
        </Grid>
    )
}

export default KeyValueInput