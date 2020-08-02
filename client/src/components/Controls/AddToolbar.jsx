import React from 'react'
import PropTypes from 'prop-types'
import {
    Toolbar,
    Button,
    Typography
} from '@material-ui/core'
import {
    Add as AddIcon
} from '@material-ui/icons'

import { SpaceBetweenGrid } from '../Layout'

const AddToolbar = ({
    onAdd
}) => {
    return (
        <SpaceBetweenGrid>
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

AddToolbar.propTypes = {
    onAdd: PropTypes.func
}

export default AddToolbar