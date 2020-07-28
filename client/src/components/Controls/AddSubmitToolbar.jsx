import React from 'react'
import PropTypes from 'prop-types'
import {
    Toolbar,
    Button,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    Add as AddIcon,
    Done as DoneIcon
} from '@material-ui/icons'

import { SpaceBetweenGrid } from '../Layout'

const AddSubmitToolbar = ({
    onSubmit,
    onAdd
}) => {
    return (
        <SpaceBetweenGrid>
            <Button
                pulledright='true'
                type='submit'
                variant='contained'
                color='primary'
                onClick={onSubmit}
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
                type='button'
                variant='contained'
                color='primary'
                onClick={onAdd}
            >
                <AddIcon />
                <Typography
                    variant='inherit'
                    className='button-text'>
                    Добавить
                    </Typography>
            </Button>
        </SpaceBetweenGrid>
    )
}

AddSubmitToolbar.propTypes = {
    onSave: PropTypes.func,
    onAdd: PropTypes.func
}

export default AddSubmitToolbar