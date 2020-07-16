import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
    Button,
    Container,
    Grid,
    MenuItem,
    Paper,
    TextField,
    Toolbar,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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

const ParameterModelEditView = ({
    data,
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
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        {data.map(parameterModel =>
                            <Fragment key={parameterModel._id}>
                                <Grid item xs={2}>
                                    {/* <TextField
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id='name'
                                        label='Название характеристики'
                                        name='name'
                                        autoComplete='off'
                                        value={parameterModel.name}
                                        onChange={e => onChange(e)} /> */}
                                </Grid>

                                <Grid item xs={2}>
                                    <TextField
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id='relation.type'
                                        label='Тип зависимости'
                                        name='relation.type'
                                        value={parameterModel.relation.type}
                                        select
                                        onChange={e => onChange(e)} >
                                        <MenuItem value='linear'>y = a*x + b</MenuItem>
                                        <MenuItem value='exponential'>y = a * b^x</MenuItem>
                                    </TextField>
                                </Grid>

                                <Grid item xs={2}>
                                    <TextField
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id='relation.a'
                                        label='a'
                                        name='relation.a'
                                        autoComplete='off'
                                        value={parameterModel.relation.a}
                                        onChange={e => onChange(e)} />
                                </Grid>

                                <Grid item xs={2}>
                                    <TextField
                                        variant='outlined'
                                        margin='normal'
                                        fullWidth
                                        id='relation.b'
                                        label='b'
                                        name='relation.b'
                                        autoComplete='off'
                                        value={parameterModel.relation.b}
                                        onChange={e => onChange(e)} />
                                </Grid>
                            </Fragment>
                        )}
                    </Grid>
                </Paper>
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
                    </Grid>
                </div>
            </Toolbar>
        </Container>
    );
}

ParameterModelEditView.propTypes = {
    data: PropTypes.array.isRequired
}

export default reduxForm({
    form: 'ParameterModelForm'
})(ParameterModelEditView)