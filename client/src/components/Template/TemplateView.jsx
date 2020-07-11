import React from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Grid,
    Paper,
    Toolbar,
    Button,
    Typography
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { makeStyles } from '@material-ui/core/styles'

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

const TemplateView = ({
    data,
    onModeChange
}) => {
    const classes = useStyles()
    
    return (
        <Container maxWidth='md' className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        {data && data.templateField1 ?
                            data.templateField1 :
                            'Template Empty'}
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        {data && data.templateField2 ?
                            data.templateField2 :
                            'Template Empty'}
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {data && data.templateField3 ?
                            data.templateField3 :
                            'Template Empty'}
                    </Paper>
                </Grid>
            </Grid>
            <Toolbar disableGutters className={classes.toolbar}>
                <div className={classes.leftEmptySpace}></div>

                <Button edge='start'
                    variant='contained'
                    color='primary'
                    onClick={e => onModeChange(e)}>
                    <EditIcon />
                    <Typography
                        variant='inherit'
                        className={classes.buttonText}>
                        Edit
                    </Typography>
                </Button>
            </Toolbar>
        </Container>
    );
}

TemplateView.propTypes = {
    data: PropTypes.object.isRequired,
    onModeChange: PropTypes.func.isRequired
}

export default TemplateView