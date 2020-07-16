import React from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Grid,
    Paper,
    Toolbar,
    Button,
    TextField,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import DoneIcon from '@material-ui/icons/Done'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    leftEmptySpace: {
        flexGrow: 1,
    },
    toolbar: {
        paddingTop: theme.spacing(1)
    },
    buttonText: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    }
}))

const CharacterProfileEditView = ({
    data,
    onModeChange,
    onChange,
    onSubmit
}) => {
    const classes = useStyles()

    return (
        <Container maxWidth='md' className={classes.root}>
            <form
                className={classes.form}
                noValidate
                onSubmit={onSubmit}>

                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <TextField
                                variant='standard'
                                margin='normal'
                                fullWidth
                                id='name'
                                label='CharacterProfile Field 1'
                                name='name'
                                autoComplete='off'
                                value={data.name}
                                onChange={e => onChange(e)} />
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>
                            <TextField
                                variant='standard'
                                margin='normal'
                                fullWidth
                                id='name'
                                label='CharacterProfile Field 2'
                                name='name'
                                autoComplete='off'
                                value={data.name}
                                onChange={e => onChange(e)} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <TextField
                                variant='standard'
                                margin='normal'
                                fullWidth
                                id='gameName'
                                label='CharacterProfile Field 3'
                                name='gameName'
                                autoComplete='off'
                                value={data.gameName}
                                onChange={e => onChange(e)} />
                        </Paper>
                    </Grid>
                </Grid>
            </form>

            <Toolbar disableGutters className={classes.toolbar}>
                <div className={classes.leftEmptySpace}></div>
                <div>
                    <Grid container spacing={3}>
                        <Grid item>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'
                                onClick={e => onSubmit(e)}>
                                <DoneIcon />
                                <Typography
                                    variant='inherit'
                                    className={classes.buttonText}>
                                    Сохранить
                                </Typography>
                            </Button>
                        </Grid>

                        <Grid item>
                            <Button edge='start'
                                variant='contained'
                                color='primary'
                                onClick={e => onModeChange(e)}>
                                <EditIcon />
                                <Typography
                                    variant='inherit'
                                    className={classes.buttonText}>
                                    Отмена
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Toolbar>
        </Container>
    );
}

CharacterProfileEditView.propTypes = {
    data: PropTypes.object.isRequired,
    onModeChange: PropTypes.func.isRequired
}

export default CharacterProfileEditView