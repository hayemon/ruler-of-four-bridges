import React from 'react'
import PropTypes from 'prop-types'
import {
    Toolbar,
    Button,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
    Close as CloseIcon,
    Done as DoneIcon
} from '@material-ui/icons'

import { SpaceBetweenGrid } from '../Layout'

const CancelSubmitToolbar = ({
    onSubmit,
    onCancel
}) => {
    return (
        <SpaceBetweenGrid>
            <Button
                pulledright='true'
                type='button'
                variant='contained'
                color='secondary'
                onClick={onCancel}
            >
                <CloseIcon />
                <Typography
                    variant='inherit'
                    className='button-text'>
                    Отмена
                    </Typography>
            </Button>

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
        </SpaceBetweenGrid>
    )
}

CancelSubmitToolbar.propTypes = {
    onSave: PropTypes.func,
    onCancel: PropTypes.func
}

export default CancelSubmitToolbar